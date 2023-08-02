<template>
  <v-container>
    <v-row>
      <v-col md="6" sm="8" xs="12" class="mx-auto">
        <SearchBox class="mb-3" />
        <WeatherCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import SearchBox from '@/components/SearchBox.vue'
import WeatherCard from '@/components/WeatherCard.vue'
</script>

<script setup></script>
