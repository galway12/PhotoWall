<template>
	<ul class="img_ul">
		<li v-for="(item,i) in list.arr">
			<img :src="item" :key="i">
		</li>
	</ul>
</template>

<script setup>
	const imgs =
		import.meta.globEager(`@/assets/img/*.*`)
	//引入所有图片
	import {
		onMounted,
		reactive
	} from 'vue'

	const list = reactive({
		arr: []
	});
	onMounted(() => {
		for (let path in imgs) {
			list.arr.push(imgs[path].default);
		}
		return {
			list
		}
	})
</script>

<style scoped lang="scss">
	.img_ul {
		display: flex;
		flex-wrap: wrap;
		>li {
			width: 10%;
			margin: 2px;
			>img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
