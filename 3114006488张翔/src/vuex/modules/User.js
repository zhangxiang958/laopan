import Vue from 'vue';

export const SIGNIN = 'USER_SIGININ';
export const SIGNOUT = 'USER_SIGINOUT';

export default {
	state: {
		account: ''
	},
	mutations: {
		[SIGNIN](state, data){
			console.log(data);
			state.account = data.accounts;
		},
		[SIGNOUT](state){
			state.account = '';
		}
	},
	actions: {
		[SIGNIN](){

		},
		[SIGNOUT](){

		}
	}
}