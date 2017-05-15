import Vue from 'vue';

export const CHANGEFOLDER 	= 'FOLDER_CHANGE';
export const ADDFILE 		= 'ADD_FILE';
export const ADDFOLDER 		= 'ADD_FOLDER';
export const ENTERFOLDER 	= 'ENTER_FOLDER';
export const CHANGEPATH 	= 'CHANGE_PATH';
export const CHANGEPATHNAME = 'CHANGE_PATHNAME';
export const CDLASTPATH		= 'CD_LASTPATH';
export const SELECT 		= 'SELECT';	

export default {
	state: {
		Root: [],
		currFolder: [],
		path: [0],
		pathName: ['全部文件'],
		select: {}
	},
	mutations: {
		[CHANGEFOLDER](state, id){
			console.log(id);
			state.currFolder = id;
		},
		[ADDFILE](state, data) {
			console.log(data);
			state.Root = data;
		},
		[ADDFOLDER](state, data) {
			console.log(data);
			state.Root = data;
		},
		[ENTERFOLDER](state, data) {
			console.log(data);
			state.currFolder = data;
		},
		[CHANGEPATH](state, data) {
			state.path.push(data);
			console.log(state.path);
		},
		[CHANGEPATHNAME](state, data) {
			state.pathName.push(data);
			console.log(state.pathName);
		},
		[CDLASTPATH](state) {
			state.pathName.pop();
			state.path.pop();
			console.log(state.pathName);
		},
		[SELECT](state, item) {
			state.select = item;
		}
	},
	actions: {
		[CHANGEFOLDER](){

		}
	}
}