<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides 列表项 -->
      <!-- <swiper-slide  v-for="(item, i) in banners.arr" :key="i"
        ><img :src="item" alt=""
      /></swiper-slide> -->
    </swiper>
  </div>
</template>

<script setup>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import { onMounted, reactive, ref, nextTick } from "vue";
const banners = reactive({
  arr: [],
});
const imgs = import.meta.globEager(`@/assets/img/*.*`);

onMounted(() => {
  for (let path in imgs) {
    banners.arr.push(imgs[path].default);
  }
  return {
    banners,
  };
});
</script>

<style scoped lang="scss">
</style>
<style scoped>
.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #00ff33; /* 两种都可以 */
  --swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 20px; /* 设置按钮大小 */
}
</style>