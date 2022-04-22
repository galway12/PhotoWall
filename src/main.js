import {
	createApp
} from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './utils/flexible.js'

import vant from "./vant";
import router from "./router";
// 完整加载
import VueLuckyCanvas from '@lucky-canvas/vue'

const app = createApp(App)

app.use(vant);

app.use(router);

app.use(VueLuckyCanvas)

app.mount('#app')
