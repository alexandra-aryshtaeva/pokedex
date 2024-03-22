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
</script>

<template>
  <h1>{{ pokemon.name }}</h1>
  <img :src="pokemon.image" :alt="pokemon.name" />
  <ul>
    <li>{{ pokemon.base_experience }} base experience</li>
    <li>
      <table>
        <thead>
          <th v-for="stat in stats">{{ stat.name }}</th>
        </thead>

        <tbody>
          <td v-for="stat in stats">{{ stat.value }}</td>
        </tbody>
      </table>
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
h1 {
  background-color: red;
}
</style>
