import Vue from 'vue'
import App from './App.vue'


const root = document.createElement('div')
root.id = 'root'
document.body.prepend(root)

App.el = '#root'

new Vue(App)