import {
	createApp
} from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './utils/flexible.js'
import router from "./router";
createApp(App).use(router).mount('#app')
