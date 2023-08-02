import { defineStore } from 'pinia'

export const WeatherStore = defineStore({
    id: 'weather',
    state: () => ({
        location: null,
        weather: null
    }),
    actions: {
        setLocation(value) {
            this.location = value
        },
        setWeather(value) {
            this.weather = value
        }
    },
    persist: {
        storage: localStorage
    }
})
