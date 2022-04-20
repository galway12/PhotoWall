<template>
  <img
    ref="imgDom"
    :class="{ posi: true, music: play }"
    @click="zt"
    src="@assets/icons/music.png"
    alt=""
  />
  <audio ref="audio" controls :hidden="true">
    您的浏览器不支持 audio 标签。
    <source
      src="https://music.163.com/song/media/outer/url?id=1334246005"
      type="audio/mpeg"
    />
  </audio>
</template>

<script setup>
import { onMounted, reactive, ref, nextTick } from "vue";

const audio = ref(null);
const imgDom = ref(null);
const play = ref(false);
const zt = () => {
  console.log(play.value);
  if (play.value) {
    audio.value.pause();
    imgDom.value.style.animationPlayState = "paused";
  } else {
    audio.value.play();
    imgDom.value.style.animationPlayState = "running";
  }
  play.value = !play.value;
};
onMounted(() => {
  nextTick(() => {
    imgDom.value.style.animationPlayState = "paused";
  });
  return {
    audio,
    play,
    zt,
    imgDom,
  };
});
</script>

<style scoped lang="scss">
.posi {
  width: 60px;
  height: 60px;
  position: fixed;
  right: -30px;
  top: 30%;
  transition: all 1s linear;
  animation: zhuan 8s infinite linear;
  z-index: 20;
}
.music {
  right: 30px;
}
@keyframes zhuan {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
