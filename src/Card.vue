<script setup>
import { computed } from "vue";
import { mapTypeToColor } from "./utils";

const props = defineProps(["pokemon"]);
const emit = defineEmits(["return"]);

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

const color = computed(() => mapTypeToColor(types.value[0]));
</script>

<template>
  <div id="modal">
    <Transition>
      <div id="card">
        <h1>{{ upperName }}</h1>

        <img :src="pokemon.image" :alt="pokemon.name" />
        <div id="info">
          <h3>Info</h3>
          <li>
            <div v-for="t in types">Type: {{ t }}</div>
          </li>

          <li>height: {{ heightInMeters }} m</li>
          <li>weigth: {{ weightInKg }} kg</li>
          <li>ability: {{ ability }}</li>
        </div>
        <div id="stats">
          <h3>Stats</h3>
          <li v-for="stat in stats">{{ stat.name }}: {{ stat.value }} &nbsp</li>
          <button @click="emit('return')">Return</button>
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
  font-family: "Pixelify Sans";
  font-size: 20px;
  box-shadow: 1px 8px 16px rgb(62, 23, 23);
  background: linear-gradient(0deg, v-bind(color), rgba(253, 187, 45, 0.1) 99%);
  padding: 16px;

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
h1 {
  color: v-bind(color);

  margin-bottom: 32px;
  margin-top: 16px;
}
img {
  border: solid 2px v-bind(color);
  padding: 8px;
  border-radius: 64px;
  margin-bottom: 32px;
  margin-top: 0px;
  box-shadow: 1px 8px 16px rgb(62, 23, 23);
}
ul {
  list-style: none;
}
li {
  list-style: none;
}
h3 {
  opacity: 0.9;
  margin: 0px;
}
button {
  color: v-bind(color);
  margin-top: 16px;
  padding: 16px 32px;
  font-family: "Pixelify Sans";
  border: solid black 2px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: bolder;
  box-shadow: 0px 6px 10px rgba(62, 23, 23, 0.5);
}
#info {
  margin-top: 0px;
}
#stats {
  margin-bottom: 48px;
  margin-top: 0px;
  padding: 8px;
  padding-top: 16px;

  padding-left: 16px;
}
</style>
