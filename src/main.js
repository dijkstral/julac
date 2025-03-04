import { createApp } from 'vue'

import pinia from './pinia' // 状态管理器
import router from './router' // 路由管理器
import './style.css' // 引用样式，自带样式不需要关注
import 'virtual:uno.css'
import Vue3SmoothScroll from 'vue3-smooth-scroll';

import App from './App.vue' // App入口

createApp(App).use(pinia).use(router).use(Vue3SmoothScroll).mount('#app')