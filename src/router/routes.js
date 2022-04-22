const routes = [{
	path: '/',
	name: 'index',
	title: 'home',
	component: () => import('@/views/tabPages/index.vue'), //.vue不能省略
	meta: {
		keepAlive: true
	},
	children: [
		{
			path: '/home',
			name: 'home',
			title: 'home',
			component: () => import('@/views/tabPages/home.vue'), //.vue不能省略
			meta: {
				keepAlive: true
			},
		},
		{
			path: '/about',
			name: 'about',
			title: 'about',
			component: () => import('@/views/tabPages/about.vue'), //.vue不能省略
			meta: {
				keepAlive: true
			},
		},
		{
			path: '/day',
			name: 'day',
			title: 'day',
			component: () => import('@/views/tabPages/day.vue'), //.vue不能省略
			meta: {
				keepAlive: true
			},
		},
		{
			path: '/me',
			name: 'me',
			title: 'me',
			component: () => import('@/views/tabPages/me.vue'), //.vue不能省略
			meta: {
				keepAlive: true
			},
		}
	]
},]
export default routes
