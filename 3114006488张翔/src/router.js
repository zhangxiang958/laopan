const index = require('./views/app.vue');

const router = [
	{
		path: '/',
		name: 'index',
		component: index,
		children: [
			{
				path: '/',
				name: 'dashboard',
				component:  function(resolve) {
 					require.ensure(['./views/dashboard/dashboard.vue'], function(){
 						resolve(require('./views/dashboard/dashboard.vue'));
 					}, 'Dashboard');
				}
			},
			{
				path: '/pandect',
				name: 'pandect',
				component:  function(resolve) {
					require.ensure(['./views/pandect/pandect.vue'], function(){
						resolve(require('./views/pandect/pandect.vue'));
					}, 'Pandect');
				}
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component:  function(resolve) {
			require.ensure(['./views/login/login.vue'], function(){
				resolve(require('./views/login/login.vue'));
			}, 'Login');
		}
	}

];

export default router;