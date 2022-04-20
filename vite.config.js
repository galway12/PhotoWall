import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from "vite-plugin-style-import";
const {
	resolve
} = require('path');

export default defineConfig({
	plugins: [vue(), styleImport({
		libs: [
			{
				libraryName: "vant",
				esModule: true,
				resolveStyle: (name) => `vant/es/${name}/style/index`,
			},
		],
	})],
	// base:'./',
	base: '/PhotoWall/dist',
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@components': resolve(__dirname, 'src/components'),
			'@assets': resolve(__dirname, 'src/assets'),
		},
	},
})
