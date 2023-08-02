<template>
  <v-app>
    <NavBar />

    <v-main class="bg-grey-lighten-3">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>
