/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-05-16 21:04:43
 * @LastEditTime: 2023-05-16 23:41:55
 */
import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app';
const app = createApp(App);
app.use(router);
app.mount('#app');





// const microAppConfig = {
//   iframe: true,
//   'clear-data': true, 
//   destroy : true,
//   'disable-scopecss': true,
// }

const lifeCycles = {
  created: (e) => {
    console.log('created ...');
  },
  beforemount: (e) => {
    console.log('beforemount ...');
  },
  mounted: (e) => {
    console.log('mounted ...');
  },
  unmount: (e) => {
    console.log('unmount ...');
  },
  error: (e) => {
    console.log('error ...');
  },
}

microApp.start({
  lifeCycles
});

/**
 *  应用卸载时执行
 */
window.addEventListener('unmount', function () {
  // 执行卸载相关操作
  console.log('子应用已经卸载')
})




