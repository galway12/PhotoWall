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
	// base:'./',
	base:'/PhotoWall/dist',
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@components': resolve(__dirname, 'src/components'),
			'@assets': resolve(__dirname, 'src/assets'),
		},
	},
})
