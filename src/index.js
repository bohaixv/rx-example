import Vue from 'vue'
import App from './App.vue'
import VueRx from 'vue-rx'

Vue.use(VueRx)

const root = document.createElement('div')
root.id = 'root'
document.body.prepend(root)

App.el = '#root'

new Vue(App)