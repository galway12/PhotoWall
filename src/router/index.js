// 引入 router
import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
// 引入路由各页面配置
import routes from './routes'
// 配置router对象
const router = createRouter({
	history: createWebHashHistory(),
	routes
})
export default router

// 作者： 躺平是终点
// 链接： https: //juejin.cn/post/7013329932134662151
// 	来源： 稀土掘金
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
