<script setup>
import { computed } from "vue";

const props = defineProps(["pokemon"]);

const stats = computed(() => {
  return props.pokemon.stats.map((stat) => {
    return {
      name: stat.stat.name,
      value: stat.base_stat,
    };
  });
});

const weightInKg = computed(() => {
  return Math.round((props.pokemon.weight / 10) * 100) / 100;
});

const heightInMeters = computed(() => {
  return Math.round((props.pokemon.height / 10) * 100) / 100;
});

const ability = computed(() => {
  const ability = props.pokemon.abilities.find((a) => a.name !== "competitive");

  return ability.ability.name;
});

const types = computed(() => {
  return props.pokemon.types
    .sort((a, b) => a.slot - b.slot)
    .map((t) => {
      return t.type.name;
    });
});

const upperName = computed(() => {
  const first = props.pokemon.name.slice(0, 1);

  const rest = props.pokemon.name.slice(1, props.pokemon.name.length);
  return first.toUpperCase() + rest;
});
</script>

<template>
  <h1>{{ upperName }}</h1>
  <img :src="pokemon.image" :alt="pokemon.name" />
  <ul id="">
    <li>{{ pokemon.base_experience }} base experience</li>
    <li>
      <thead>
        <th v-for="stat in stats">{{ stat.name }}</th>
      </thead>

      <tbody>
        <td v-for="stat in stats">{{ stat.value }}</td>
      </tbody>
    </li>
    <li>{{ heightInMeters }} m</li>
    <li>{{ weightInKg }} kg</li>
    <li>{{ ability }}</li>
    <li>
      <div v-for="t in types">
        {{ t }}
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
}
h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  background-color: red;
}
</style>
