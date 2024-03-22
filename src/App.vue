<script setup>
import { computed, ref } from "vue";
import Card from "./Card.vue";

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
        base_experience: data.base_experience,
        stats: data.stats,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities,
        types: data.types,
      };

      console.log(data);
    })
    .catch((error) => {
      console.error(error);
      errorMessage.value = error;
    });
}
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

  <Card v-if="pokemon" :pokemon="pokemon" />
</template>
