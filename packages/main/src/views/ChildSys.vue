<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-05-16 22:45:21
 * @LastEditTime: 2023-05-16 23:40:00
-->
<script lang="ts" setup>
import config from '../config';

import { EventCenterForMicroApp } from '@micro-zoe/micro-app'
// @ts-ignore 因为vite子应用关闭了沙箱，我们需要为子应用appname-vite创建EventCenterForMicroApp对象来实现数据通信
window.eventCenterForAppNameVite = new EventCenterForMicroApp('appname-vite')

const microAppData =  {msg: '来自基座的数据'};
const url: any = `${config.childSys}/`;


const handleCreate: any = () => {

}
const handleBeforeMount = () => {

}
const handleMount = () => {

}

const handleUnmount = () => {

}

const handleError = () => {

}

const handleDataChange = () => {
  
}
</script>
<template>
  <div>
    <micro-app
      name='child-sys'
      :url='url'
      inline
      clear-data
      destroy
      disable-scopecss
      iframe
    ></micro-app>
  </div>
</template>