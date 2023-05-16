<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-05-16 22:45:21
 * @LastEditTime: 2023-05-16 23:40:46
-->
<script lang="ts" setup>
import config from '../config';
const microAppData =  {msg: '来自基座的数据'};
const url: any = `${config.childBusiness}/`;
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
      name='child-business'
      :url='url'
      inline

      clear-data
      destroy
      disable-scopecss
      :data='microAppData'
      @created='handleCreate'
      @beforemount='handleBeforeMount'
      @mounted='handleMount'
      @unmount='handleUnmount'
      @error='handleError'
      @datachange='handleDataChange'
      iframe
    ></micro-app>
  </div>
</template>