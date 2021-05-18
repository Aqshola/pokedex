<template>
  <b-container fluid class="w-100">
    <b-row>
      <b-col class="p-5 d-flex flex-column justify-content-center">
        <h1 class="w-50 text-left text-dark">
          Find all your favorite Pokemon
        </h1>
        <h4 class="w-75 text-left mt-3 text-dark">
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </h4>
        <button class="btn-main">See pokemons</button>
      </b-col>
      <b-col>
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
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
};
</script>
