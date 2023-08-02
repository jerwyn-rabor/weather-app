<template>
  <v-text-field
      density="compact"
      variant="solo"
      label="Enter your location"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      v-model="searchTerm"
      v-on:keyup.enter="submitLocation"
  ></v-text-field>
</template>

<script setup>
import { ref } from 'vue'
import { WeatherStore } from '../stores/Weather'

const weatherStore = WeatherStore()
const searchTerm = ref(null)

const submitLocation = async () => {
  weatherStore.setLocation(searchTerm.value)
}
</script>
