<template>
  <div id="app">
    <div class="bg-gradient-third min-vh-100">
      <b-navbar
        toggleable="lg"
        type="light"
        variant="third"
        class="shadow-sm px-5"
      >
        <b-navbar-brand href="/">
          <img src="./assets/Logo.png" alt="pokemon logo" srcset="" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/pokedex">Pokedex</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
        </b-collapse>
      </b-navbar>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
