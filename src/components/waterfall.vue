<template>
  <ul class="img_ul">
    <li v-for="(item, i) in list.arr" :key="i" @click="oPenBig(item)">
      <!-- <img :src="item" alt="" /> -->
      <van-image
        lazy-load
        fit="scale-down"
        width="auto"
        height="auto"
        :src="item"
        alt="❤"
      />
    </li>
  </ul>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { ImagePreview } from "vant";

const imgs = import.meta.globEager(`@/assets/img/*.*`);
//引入所有图片

const list = reactive({
  arr: [],
});

const oPenBig = (item) => {
  ImagePreview([item]);
};
onMounted(() => {
  for (let path in imgs) {
    list.arr.push(imgs[path].default);
  }

  return {
    oPenBig,
    list,
  };
});
</script>

<style scoped lang="scss">
.img_ul {
  column-count: 3;
  column-count: 3;
  column-gap: 0;
  -moz-column-count: 3; /* Firefox */
  -webkit-column-count: 3; /* Safari 和 Chrome */
  -moz-column-gap: 0; /* Firefox */
  -webkit-column-gap: 0; /* Safari 和 Chrome */
  background: #ffffcc;
  > li {
    column-gap: 0;
    break-inside: avoid;
  }
}
</style>
