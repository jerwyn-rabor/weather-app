import { defineStore } from 'pinia'

export const NetworkStore = defineStore({
    id: 'network',
    state: () => ({
        online: true
    }),
    actions: {
        setOnlineStatus(value) {
            this.online = value
        }
    },
    persist: {
        storage: localStorage
    }
})
