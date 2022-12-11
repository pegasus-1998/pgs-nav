import { defineStore } from 'pinia'
import configPath from '@/config/path.js'

export const useNavPathStore = defineStore('navPath', {
    state() {
        return {
            configPath,
            count: 10,
        }
    },
    getters: {
        navLength(state) {
            let len = 0
            state.configPath.forEach(item => len += item.children.length)
            return len
        }
    },
    actions: {
        addCount() {
            this.count++
        }
    }
})