<script setup>
import { ref } from "vue";

const pokemonName = ref();
const pokemon = ref();
const errorMessage = ref();

async function getPokemon() {
  await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName.value)
    .then((response) => {
      if (response.ok === false) {
        throw new Error("Could not fetch the sauce");
      }

      return response.json();
    })
    .then((data) => {
      pokemon.value = {
        name: data.name,
        image: data.sprites.front_default,
      };

      console.log(data);
    })
    .catch((error) => {
      console.error(error);
      errorMessage.value = error;
    });
}

// const test = ref("");
// const pokemons = ref([
//   { id: 1, name: "charizard" },
//   { id: 2, name: "piplop" },
//   { id: 3, name: "ditto" },
// ]);
</script>

<template>
  <input v-model="pokemonName" type="text" placeholder="choose your pokemon!" />
  <button @click="getPokemon()">search</button>

  <div v-show="pokemonName === 'piplup'">
    <strong>thats my fave!</strong>
  </div>

  <div v-if="errorMessage">
    {{ errorMessage }}
  </div>

  <div v-if="pokemon">
    <h1>{{ pokemon.name }}</h1>

    <img :src="pokemon.image" :alt="pokemon.name" />
  </div>
</template>

<style>
@import "./style.css";
</style>
