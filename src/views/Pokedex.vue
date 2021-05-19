<template>
  <b-container fluid>
    <h2 class="text-dark mt-4">Many Pokemon for you to choose</h2>
    <b-row class="mt-3">
      <b-col cols="9" class="mx-auto">
        <b-input placeholder="search pokemon" class="poke-search"></b-input>
      </b-col>
    </b-row>
    <div class="container p-0">
      <b-row class="mt-5 d-flex p-4 flex-wrap p-md-0 justify-content-between">
        <poke-card v-for="data in pokeData" :key="data.name" :url="data.url" />
      </b-row>
    </div>
  </b-container>
</template>

<script>
import PokeCard from '../components/elements/PokeCard/PokeCard.vue';
export default {
  components: { PokeCard },
  name: 'Pokedex',
  created() {
    this.getPokeList();
  },
  data() {
    return {
      pokeData: [],
    };
  },
  methods: {
    async getPokeList() {
      const result = await (
        await fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
      ).json();

      this.pokeData = result.results;
    },
  },
};
</script>
