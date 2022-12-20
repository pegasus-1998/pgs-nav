import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import configPath from '@/config/path.js'

let collArr = localStorage.getItem('collArr')

collArr ? collArr = JSON.parse(collArr) : collArr = []

const useNavPathStore = defineStore('navPath', {
    state() {
        return {
            configPath,
            localCollArr: collArr
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
        setCollArr(obj) {
            const idx = this.localCollArr.findIndex(item => item.url === obj.url)
            if(idx === -1) {
                this.localCollArr.push(obj)
                ElMessage({
                    type: 'success',
                    message: '收藏成功！'
                })
            }else {
                this.localCollArr.splice(idx, 1)
                ElMessage({
                    type: 'error',
                    message: '取消收藏！'
                })
            }
            localStorage.setItem('collArr', JSON.stringify(this.localCollArr))     
        }
    }
})

export {
    useNavPathStore
}