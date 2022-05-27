<template>
  <div>
    <van-swipe class="swipe_box" :show-indicators="false">
      <van-swipe-item class="swipe_item" v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import img1 from "@/assets/img/01.png";
import img2 from "@/assets/img/09.png";
export default {
  data() {
    return {
      images: [
        img1,
        img2
      ]
    }
  }
}
</script>
<style  lang="scss" scoped>
.swipe_box {
  height: 95vh;
  position: relative;
}

.swipe_box::before {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 26%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), transparent);
  z-index: 10;
}

.swipe_box::after {
  display: block;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 26%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, .5), transparent);
  z-index: 10;
}

.swipe_item {
  width: 100%;
  height: 100%;

  >img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

}
</style>
