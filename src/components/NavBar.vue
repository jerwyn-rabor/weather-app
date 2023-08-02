<template>
  <v-app-bar flat color="yellow-darken-4" class="text-white">
    <v-container class="fill-height d-flex align-center">
      <v-app-bar-title>Weather App</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-icon class="mr-3">{{ online ? 'mdi-wifi' : 'mdi-wifi-off' }}</v-icon>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { NetworkStore } from '../stores/Network'

const networkStore = NetworkStore()
const { online } = storeToRefs(networkStore)

const updateOnlineStatus = () => {
  networkStore.setOnlineStatus(navigator.onLine)
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)
</script>
