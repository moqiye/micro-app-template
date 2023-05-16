/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-05-16 21:35:52
 * @LastEditTime: 2023-05-16 22:12:43
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app');

if (window.__MICRO_APP_ENVIRONMENT__) {
  console.log('我在微前端环境中')
}
