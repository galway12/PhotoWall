<template>
  <div class="me_box">
    <div class="msg">{{ msg }}</div>
    <van-button class="btn" :loading="isloading" color="rgb(94,97,109)" round size="small" type="primary"
      @click="getMsg">
      换亿句
    </van-button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Toast } from 'vant'
import { getGs } from '@api/001.js'
const msg = ref("");
const isloading = ref(false);
// 获取橘子
const getMsg = () => {
  isloading.value = true
  getGs().then(res => {
    msg.value = res.data.hitokoto
    isloading.value = false
  }).catch(err => {
    console.log(err)
    Toast('慢点~')
    isloading.value = false
  })
}
onMounted(() => {
  getMsg();
  return { msg, getMsg, isloading }
})
</script>

<style lang="scss" scoped>
.me_box {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/img/zz.png);
  background-size: 100% 100%;
  padding-top: 300px;
}

.msg {
  font-size: 16px;
  color: rgb(238, 72, 102);
}

.btn {
  position: fixed;
  left: 45%;
  bottom: 20%;
}
</style>
