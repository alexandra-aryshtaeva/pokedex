<script setup>
import { computed, ref } from "vue";
import Card from "./Card.vue";
import Search from "~icons/material-symbols/search";

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
      show.value = true;
    });
}
const show = ref(true);
</script>

<template>
  <div v-if="show">
    <h1>Pokedex</h1>
    <div class="input">
      <Search class="search" />
      <input
        @keyup.enter="
          getPokemon();
          show = !show;
        "
        v-model="pokemonName"
        type="text"
        placeholder="Choose your pokemon!"
      />
    </div>

    <div v-show="pokemonName === 'piplup'">
      <strong>thats my fave!</strong>
    </div>
  </div>
  <div v-if="errorMessage">
    {{ errorMessage }}
  </div>

  <Card v-if="pokemon" :pokemon="pokemon" />
</template>

<style scoped>
h1 {
  font-family: "Pokemon Solid";
  padding-right: 32px;
  position: fixed;
  top: calc(15%);
  left: 50%;
  transform: translateX(-50%);
  font-size: 72px;
  margin-block: 0;
  -webkit-text-stroke: 2px var(--blue);
  color: yellow;
  text-shadow: 0px 0px 0px red, 0 0 0em blue, 1px 8px 10px rgb(96, 28, 28);
}
.input {
  display: inline-flex;
  position: fixed;
  top: calc(50% - 64px);
  left: 50%;
  transform: translateX(-50%);
  align-content: center;
  align-items: center;
  border-radius: 32px;
  background-color: white;
  border: solid var(--blue);
  padding: 8px;
  box-shadow: 1px 8px 16px rgb(107, 28, 28);
}
input {
  all: unset;
  padding-bottom: 1px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  justify-self: center;
  padding-right: 25vw;
}
.search {
  padding-right: 4px;
  padding-top: 2px;
  color: var(--blue);
}
</style>
