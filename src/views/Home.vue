<template>
  <div class="bg-gradient-main" style="min-height:90vh">
    <b-container fluid>
      <b-row class="d-flex flex-lg-row flex-column">
        <b-col sm class="p-0 d-flex d-lg-none  justify-content-center">
          <figure class="figure">
            <img
              src="../assets/BannerComplete.png"
              class="figure-img img-fluid rounded"
              alt="..."
            />
          </figure>
        </b-col>
        <b-col sm class="col-sm p-5 d-flex flex-column justify-content-center">
          <h1 class="text-left text-dark text-center text-lg-left title-text">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p
            class="w-lg-75 text-left mt-3 text-dark lead text-center text-lg-left title-desc"
          >
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </p>
          <router-link
            to="/pokedex"
            class="mx-auto mx-lg-0"
            style="width:fit-content"
          >
            <button class="btn-main">
              See pokemons
            </button>
          </router-link>
        </b-col>
        <b-col sm class="p-0 d-none d-lg-block p-2 p-md-0">
          <figure class="figure">
            <img
              src="../assets/banner.png"
              class="figure-img img-fluid rounded"
              alt="..."
            />
          </figure>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  title: 'Home',
};
</script>
