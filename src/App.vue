<template>
  <div id="app">
    <div class=" min-vh-100">
      <b-navbar
        toggleable="lg"
        type="light"
        variant="third"
        class="shadow-sm px-5"
      >
        <b-navbar-brand href="/">
          <img src="@/assets/Logo.png" alt="" srcset="" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <router-link to="/" class="nav-link">Home</router-link>

            <router-link to="/pokedex" class="nav-link">Pokedex</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
        </b-collapse>
      </b-navbar>
      <transition
        name="router-anim"
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';
</style>
