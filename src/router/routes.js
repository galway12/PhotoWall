const routes = [{
	path: '/',
	name: 'index',
	title: 'home',
	component: () => import('../views/home.vue'), //.vue不能省略
}]
export default routes
