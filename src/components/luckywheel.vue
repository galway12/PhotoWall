<template>
  <LuckyWheel
    ref="myLucky"
    id="lucky"
    width="300px"
    height="300px"
    :prizes="prizes"
    :blocks="blocks"
    :buttons="buttons"
    @start="startCallback"
    @end="endCallback"
  />
  <div ref="myLucky"></div>
</template>

<script setup>
import { onMounted, reactive, ref, nextTick } from "vue";

const blocks = reactive([{ padding: "13px", background: "#617df2" }]);
const prizes = reactive([
  { fonts: [{ text: "0", top: "10%" }], background: "#e9e8fe" },
  { fonts: [{ text: "1", top: "10%" }], background: "#b8c5f2" },
  { fonts: [{ text: "2", top: "10%" }], background: "#e9e8fe" },
  { fonts: [{ text: "3", top: "10%" }], background: "#b8c5f2" },
  { fonts: [{ text: "4", top: "10%" }], background: "#e9e8fe" },
  { fonts: [{ text: "5", top: "10%" }], background: "#b8c5f2" },
]);
const buttons = reactive([
  { radius: "50px", background: "#617df2" },
  { radius: "45px", background: "#afc8ff" },
  {
    radius: "40px",
    background: "#869cfa",
    pointer: true,
    fonts: [{ text: "开始\n抽奖", top: "-20px" }],
  },
]);
const myLucky = ref(null);
const startCallback = () => {
  let lucky = document.getElementById("lucky");
  console.log(lucky);
  // 调用抽奖组件的play方法开始游戏
  // lucky.play();
  myLucky.value.play()
  // 模拟调用接口异步抽奖
  setTimeout(() => {
    // 假设后端返回的中奖索引是0
    const index = 0;
    // 调用stop停止旋转并传递中奖索引
    lucky.stop(index);
  }, 3000);
};
const endCallback = (prize) => {
  console.log(prize);
};
onMounted(() => {
  nextTick(() => {});
  return {
    myLucky,
    buttons,
    prizes,
    blocks,
    startCallback,
    endCallback,
  };
});
</script>