<script setup>
import { onMounted, ref } from "vue";

//________ Pink ________________
// function handleClick() {
//   isPink.value = !isPink.value;
// }
// const isPink = ref(false);

// _____________List________________________
// const pokemons = ref([{ label: "charizard" }, { label: "piplup" }]);
// const newPokemon = ref("");

const title = ref("Pokedex");
// const test = ref("");
const pokemons = ref([
  { id: 1, name: "charizard" },
  { id: 2, name: "piplop" },
  { id: 3, name: "ditto" },
]);
</script>

<template>
  <!-- _______ Pink ____________ -->

  <!-- <button @click="handleClick()" :class="{ 'cool-class': is'P'ink }">
    Toggle cool mode!
  </button> -->

  <!--_________ POKEMON _____________________ -->
  <h1>{{ title.toUpperCase() }}</h1>
  <!-- index part not necessary for this case -->
  <ul>
    <li v-for="({ id, name }, index) in pokemons">
      <!-- (id: {{ id }})
      (index: {{ index }}) -->
      {{ name }}
    </li>
  </ul>
  <!-- <input v-model="test" type="text" placeholder="choose your pokemon!" /> -->

  <!-- <input v-model="newPokemon" type="text" placeholder="Search your pokemon!" />
  <ul ref="coolList">
    <li v-for="{ label } in pokemons">{{ label }}</li>
    <li>{{ newPokemon }}</li>
  </ul> -->
</template>

<style>
@import "./style.css";
/* .cool-class {
  background-color: pink;
} */
</style>
