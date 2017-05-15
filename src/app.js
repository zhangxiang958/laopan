import Vue 			from 'vue';
import VueRouter 	from 'vue-router';
import VueResource 	from 'vue-resource';
import VueMdl   	from 'vue-mdl';

import store		from './vuex/store';
import routers 		from './router';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueMdl);


const router = new VueRouter({
	base: __dirname,
	routes: routers,
	linkActiveClass: 'active'
});

router.beforeEach(({meta, path}, from, next) => {
    // var {auth = true} = meta
    // console.log(store.state.user.account);
    var isLogin = Boolean(store.state.user.account); //true用户已登录， false用户未登录
    // console.log(isLogin);
    if (!isLogin && path !== '/login') {
        //next();
        return next({ path: '/login' })
    } else {
    	next();
    }
});

let folderData = '{"id":0,"childrenFolder":[{"id":123,"name":"test","owner":"admin","lock":0,"style":"folder","createTime":"2016-07-01","childrenFolder":[{"id":456,"name":"test","owner":"admin","lock":0,"style":"folder","createTime":"2016-07-19","childrenFolder":[],"file":[]}],"file":[{"id":789,"name":"testfile","content":"dkl;sakda;","owner":"admin","style":"file","createTime":"2017-05-06T10:46:20.891Z","lock":0}]}],"file":[{"id":123,"name":"testfile","content":"dkl;sakda;","owner":"admin","style":"file","createTime":"2017-05-06T10:46:20.891Z","lock":0}]}';

window.localStorage.setItem("Root", folderData);

const app = new Vue({
	store,
	router
}).$mount('#app');
