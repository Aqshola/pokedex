<template>
  <transition name="slide">
    <b-container fluid>
      <h2 class="text-dark mt-4">Many Pokemon for you to choose</h2>

      <div class="container p-0">
        <b-row class="mt-5 d-flex p-4 flex-wrap p-md-0 justify-content-between">
          <poke-card
            v-for="data in pokeData"
            :key="data.name"
            :url="data.url"
          />
        </b-row>
      </div>

      <div class="d-flex justify-content-center mt-3">
        <b-pagination-nav
          pills
          size="md"
          v-bind:number-of-pages="rows === 1 ? rows : rows / perPage"
          base-url="/pokedex?page="
          use-router
        ></b-pagination-nav>
      </div>
    </b-container>
  </transition>
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
      rows: 1,
      perPage: 15,
      currentPage: 1,
    };
  },
  watch: {
    $route: 'getPokeList',
  },
  methods: {
    async getPokeList() {
      let url = 'https://pokeapi.co/api/v2/pokemon?limit=15';
      const { query } = this.$route;

      if (query.page !== undefined) {
        url += `&offset=${query.page}*15`;
      }

      const result = await (await fetch(url)).json();

      this.pokeData = result.results;
      this.rows = result.count;
    },
  },
};
</script>
