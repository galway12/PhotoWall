import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
const {
	resolve
} = require('path');
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base:'/PhotoWall/dist',
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@com': resolve(__dirname, 'src/components'),
		},
	},
})
