<template>
  <van-tabbar
    v-model="active"
    :active-color="activeColor"
    @change="changeColor"
  >
    <van-tabbar-item name="home" to="/home">
      <template #icon="props">
        <img :src="props.active ? icon1 : icon2" />
      </template>
      昂
    </van-tabbar-item>
    <van-tabbar-item name="about" to="/about" icon="search">
      <template #icon="props">
        <img :src="props.active ? icon3 : icon4" />
      </template>
      克</van-tabbar-item
    >
    <van-tabbar-item name="day" to="/day" icon="friends-o">
      <template #icon="props">
        <img :src="props.active ? icon5 : icon6" /> </template
      >塞</van-tabbar-item
    >
    <van-tabbar-item name="me" to="/me" icon="setting-o">
      <template #icon="props">
        <img :src="props.active ? icon7 : icon8" /> </template
      >车</van-tabbar-item
    >
  </van-tabbar>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import icon1 from "@/assets/icons/tabs/home-active.png";
import icon2 from "@/assets/icons/tabs/home.png";
import icon3 from "@/assets/icons/tabs/about-active.png";
import icon4 from "@/assets/icons/tabs/about.png";
import icon5 from "@/assets/icons/tabs/day-active.png";
import icon6 from "@/assets/icons/tabs/day.png";
import icon7 from "@/assets/icons/tabs/me-active.png";
import icon8 from "@/assets/icons/tabs/me.png";
const active = ref("home");
const activeColor = ref("#07c160");
const getRandomColor = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
  //return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
};
const changeColor = () => {
  activeColor.value = getRandomColor();
};
const $router = useRouter();
onMounted(() => {
  let path = $router.currentRoute._rawValue.path;
  active.value = path.split("/")[1];
  return {
    active,
    activeColor,
    changeColor,
  };
});
</script>
<style lang="scss" scoped>

</style>


