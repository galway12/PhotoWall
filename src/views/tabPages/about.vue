<template>
  <div class="about">
    <div
      class="coverImg"
      v-for="(item, i) in 10"
      :key="i"
      :style="{ backgroundPositionY: `-${i * 30}px` }"
    ></div>
  </div>
</template>

<script setup>
</script>
<style lang="scss">
.about {
  height: 300px;
  .coverImg {
    margin-top: 2px;
    height: 10%;
    width: 100%;
    background: url("../../assets/img/11.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>


