<script setup>
import { computed } from "vue";

const props = defineProps(["pokemon"]);

const types = computed(() => {
  return props.pokemon.types
    .sort((a, b) => a.slot - b.slot)
    .map((t) => {
      return t.type.name;
    });
});

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

const upperName = computed(() => {
  const first = props.pokemon.name.slice(0, 1);

  const rest = props.pokemon.name.slice(1, props.pokemon.name.length);
  return first.toUpperCase() + rest;
});
</script>

<template>
  <div id="modal">
    <Transition>
      <div id="card">
        <div id="title">
          <h1>{{ upperName }}</h1>

          <img :src="pokemon.image" :alt="pokemon.name" />
          <div id="info">
            <ul>
              <h3>Info</h3>
              <li>
                <div v-for="t in types">Type: {{ t }}</div>
              </li>

              <li>height: {{ heightInMeters }} m</li>
              <li>weigth: {{ weightInKg }} kg</li>
              <li>ability: {{ ability }}</li>
            </ul>
          </div>
          <div id="stats">
            <ul>
              <h3>Stats</h3>
              <li v-for="stat in stats">
                {{ stat.name }}: {{ stat.value }} &nbsp
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
#modal {
  /* modal */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);

  /* card center */
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}

#card {
  box-shadow: 1px 8px 16px rgb(62, 23, 23);
  background-color: #fefefe;
  padding: 20px;
  border: 4px solid white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 75vh;
  animation: move 0.5s;
}

@keyframes move {
  from {
    transform: translateX(0px) translateY(-200px);
  }
  to {
    transform: translateX(0px) translateY(0px);
  }
}

#title {
  background-color: aqua;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-self: center;
}

ul {
  list-style: none;
}
h1 {
  border: solid 2px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
