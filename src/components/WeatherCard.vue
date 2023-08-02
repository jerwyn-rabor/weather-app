<template>
  <div>
    <v-card v-if="location && weather" rounded="lg">
      <v-card-item :title="weather.location.name">
        <template v-slot:subtitle>
          {{ weather.current.condition.text }}
        </template>
      </v-card-item>

      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <v-col class="text-h2" cols="6"> {{ weather.current.temp_c }}&deg;C </v-col>

          <v-col cols="6" class="text-right">
            <v-img :src="weather.current.condition.icon" height="100"></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <div class="d-flex py-3 justify-space-between">
        <v-list-item density="compact" prepend-icon="mdi-weather-windy">
          <v-list-item-subtitle>{{ weather.current.wind_kph }} km/h</v-list-item-subtitle>
        </v-list-item>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import axios from 'axios'
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { WeatherStore } from '../stores/Weather'

const weatherStore = WeatherStore()
const { location, weather } = storeToRefs(weatherStore)
const apiKey = import.meta.env.VITE_WEATHER_API_KEY

const fetchWeather = async (location) => {
  try {
    const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    )
    weatherStore.setWeather(data)
  } catch (error) {
    console.log(error)
  }
}

watchEffect(
    (location,
        async () => {
          if (location.value) {
            await fetchWeather(location.value)
          }
        })
)
</script>
