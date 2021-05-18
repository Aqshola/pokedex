<template>
  <div class="bg-gradient-main">
    <b-container fluid>
      <b-row>
        <b-col sm class="p-0 d-block d-md-none ">
          <figure class="figure">
            <img
              src="../assets/BannerComplete.png"
              class="figure-img img-fluid rounded"
              alt="..."
            />
          </figure>
        </b-col>
        <b-col sm class="col-sm p-5 d-flex flex-column justify-content-center">
          <h1 class="text-left text-dark text-center text-md-left title-text">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p
            class="w-md-75 text-left mt-3 text-dark lead text-center text-md-left title-desc"
          >
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </p>
          <button class="btn-main mx-auto mx-md-0 ">See pokemons</button>
        </b-col>
        <b-col sm class="p-0 d-none d-md-block p-2 p-md-0">
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
};
</script>
