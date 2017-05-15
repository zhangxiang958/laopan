<style>
	#app {
		min-width: 960px;
		overflow: hidden;
	}
	.am-nav {
		background: #303031;
		color: #fff;
	}
	.am-nav a {
		color: #fff;
	}
	.app-icon {
		margin-left: 30px;
		width: 60px;
		height: 37px;
		background: url(../common/img/notebook.png) no-repeat 50% 0;
		background-size: 40px;
	}
	.am-nav>li>a:focus, .am-nav>li>a:hover {
		background-color: transparent;
	}
	.am-nav .logout {
		float: right;
	}
	.am-nav .am-active.index a {
		background-color: transparent;
	}
	.logout {
		cursor: pointer;
	}
</style>

<template>
	<div>
		<ul class="am-nav am-nav-pills">
			<li class="app-icon">
				
			</li>
			<li class="title">
				<a>文件管理系统</a>
			</li>
		  	<li class="am-active index"><a>首页</a></li>
		  	<li class="logout" v-on:click="Logout">
		  		<a >退出登录</a>
		  	</li>
		</ul>
		<div class="am-g" id="wrapper">
  			<div class="am-u-sm-3 left">
  				<Sidebar 
					v-on:createFolder="createFolder"
					v-on:createFile="createFile"
					v-on:editFile="editFile"
					v-on:deleteFile="deleteFile"
					v-on:lock="lock"
  				/>
  			</div>
			
  			<div class="am-u-sm-9">
  				<router-view></router-view>
  			</div>
		</div>
		

		<!-- 新建文件 model start-->
		<div class="am-modal am-modal-prompt" tabindex="-1" id="newFilePrompt">
		    <div class="am-modal-dialog">
		      	<div class="am-modal-hd">新建文件</div>
		      	<div class="am-modal-bd">
		      		<form class="am-form">
		      			<fieldset>
		      				请输入要建立的文件名
				        	<input type="text" class="am-modal-prompt-input" v-model="fileName">
				        	<div class="am-form-group">
						      <label for="doc-ta-1">文件内容</label>
						      <textarea class="" rows="5" id="doc-ta-1" v-model="fileContent"></textarea>
						    </div>
		      			</fieldset>
		      		</form>
		        	
		      	</div>
		      	<div class="am-modal-footer">
		        	<span class="am-modal-btn" data-am-modal-cancel>取消</span>
		        	<span class="am-modal-btn" data-am-modal-confirm>确定</span>
		      	</div>
		    </div>
		</div>
		<!-- 新建文件 model end-->
		<!-- 新建文件夹 model start-->
		<div class="am-modal am-modal-prompt" tabindex="-1" id="newFolderPrompt">
		    <div class="am-modal-dialog">
		      	<div class="am-modal-hd">新建文件夹</div>
		      	<div class="am-modal-bd">
		      		<form class="am-form">
		      			<fieldset>
		      				请输入要建立的文件夹名
				        	<input type="text" class="am-modal-prompt-input" v-model="folderName">
		      			</fieldset>
		      		</form>
		        	
		      	</div>
		      	<div class="am-modal-footer">
		        	<span class="am-modal-btn" data-am-modal-cancel>取消</span>
		        	<span class="am-modal-btn" data-am-modal-confirm>确定</span>
		      	</div>
		    </div>
		</div>
		<!-- 新建文件夹 model end-->
	</div>
</template>

<script>
	import Sidebar  	from '../components/sidebar.vue';
	import DataTable	from '../components/table.vue';

	export default {
		created() {
			console.log("created");
			this.$store.state.folder.Root = JSON.parse(window.localStorage.getItem('Root') === '' ?  '{}' : window.localStorage.getItem('Root'));
			this.$store.state.folder.currFolder = this.$store.state.folder.Root;
		},
		mounted() {

			// console.log("mounted");
			// console.log(this.$el);
			this.initialize();
			// console.log(this.$store.state.user.account);
			// console.log(this.$store.state.folder.currFolder);
		},
		data() {
			return {
				message: 'Hello World',
				count: 0,
				fileName: '',
				fileContent: '',
				folderName: '',
			}
		},
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			initialize() {

				var User = [
					{
						'name': 'admin',
						'password': '123',
						'fileNum': 0,
						'folderNum': 0
					}
				];


				var Root = {
					'id': 0,
					'childrenFolder': [],
					'file': [] 
				};
				var Folder = {
					'id': 123,
					'name': '',
					'owner': '',
					'lock': 0,
					'style': 'folder',
					'createTime': '2016-07-01',
					'childrenFolder': [],
					'file': []
				};

				var File = {
					'id': '',
					'name': '',
					'content': '',
					'owner': '',
					'style': 'file',
					'createTime': '',
					'lock': 0
				};
				Root.childrenFolder.push({
					'id': 123,
					'name': 'test',
					'owner': 'admin',
					'lock': 0,
					'style': 'folder',
					'createTime': '2016-07-01',
					'childrenFolder': [{
						'id': 456,
						'name': 'test',
						'owner': 'admin',
						'lock': 0,
						'style': 'folder',
						'createTime': '2016-07-19',
						'childrenFolder': [],
						'file': []	
					}],
					'file': [{
						'id': 789,
						'name': 'testfile',
						'content': 'dkl;sakda;',
						'owner': 'admin',
						'style': 'file',
						'createTime': new Date(),
						'lock': 0
					}]
				});
				Root.file.push({
					'id': 123,
					'name': 'testfile',
					'content': 'dkl;sakda;',
					'owner': 'admin',
					'style': 'file',
					'createTime': new Date(),
					'lock': 0
				});

				window.localStorage.setItem("Root", JSON.stringify(Root));
			},

			createFile() {

				var that = this;

				$('#newFilePrompt').modal({
			        relatedTarget: this,
			        onConfirm: function(options) {
			        	
			        	var file = {
							'id': parseInt(Math.random() * 1000 ),
							'name': that.fileName,
							'content': that.fileContent,
							'owner': that.$store.state.user.account,
							'style': 'file',
							'createTime': new Date(),
							'lock': 0
						};
			          	console.log(that.fileName);
			          	console.log(that.fileContent);

			          	
			          	if(that.$store.state.folder.path.length == 1) {

			          		var Root = that.$store.state.folder.Root;
			          		Root.file.push(file);
			          		window.localStorage.setItem('Root',JSON.stringify(Root));
			          		that.$store.commit('ADD_FILE', Root);
			          		console.log(that.$store.state.folder.Root);

			          	} else {
			          		
			          		var currFolder = that.$store.state.folder.Root.childrenFolder;
			          		var parentFolder = {};
			          		console.log(currFolder);
			          		for(var i = 1; i < that.$store.state.folder.path.length; i++) {
			          			console.log(that.$store.state.folder.path[i]);
			          			
			          			for(var j = 0; j < currFolder.length; j++) {
			          				console.log("currFolder is : ");
			          				console.log(currFolder[j]);
			          				
			          				if(currFolder[j].id == that.$store.state.folder.path[i]) {
			          					console.log("right!!!!");
			          					parentFolder = currFolder[j];
			          					console.log(parentFolder);
			          					currFolder = currFolder[j].childrenFolder;
			          					console.log(currFolder);
			          				}
			          			}
			          		}

			          		console.log(currFolder);
			          		parentFolder.file.push(file);
			          	}
			        },
			        // closeOnConfirm: false,
			        onCancel: function() {
			          // alert('算求，不弄了');
			        }
			    });
			},
			createFolder(name) {

			    var that = this;
				$('#newFolderPrompt').modal({
			        relatedTarget: this,
			        onConfirm: function(options) {
			          	
			          	var folder = {
							'id': parseInt(Math.random() * 1000 ),
							'name': that.folderName,
							'owner': that.$store.state.user.account,
							'style': 'folder',
							'createTime': new Date(),
							'childrenFolder': [],
							'file': [],
							'lock': 0
						};


			          	console.log(that.folderName);

			          	if(that.$store.state.folder.path.length == 1) {
			          		var Root = that.$store.state.folder.Root;
				          	Root.childrenFolder.push(folder);

				          	window.localStorage.setItem('Root',JSON.stringify(Root));
				          	
				          	that.$store.commit('ADD_FOLDER', Root);
				          	
				          	console.log(that.$store.state.folder.Root);
			          	} else {
			          		
			          		var currFolder = that.$store.state.folder.Root.childrenFolder;
			          		
			          		for(var i = 1; i < that.$store.state.folder.path.length; i++) {
			          			console.log(that.$store.state.folder.path[i]);
			          			console.log(currFolder);
			          			for(var j = 0; j < currFolder.length; j++) {
			          				console.log("currFolder is : ");
			          				console.log(currFolder[j]);
			          				
			          				if(currFolder[j].id == that.$store.state.folder.path[i]) {
			          					console.log("right!!!!");
			          					currFolder = currFolder[j].childrenFolder;
			          					console.log(currFolder);
			          					// break;
			          				}
			          			}
			          		}

			          		currFolder.push(folder);
			          		console.log(currFolder);


			          	} 	
			          	
			        },
			        // closeOnConfirm: false,
			        onCancel: function() {
			          	alert('算求，不弄了');
			        }
			    });
			},
			editFile(id) {
				alert("edit");
				
			},
			deleteFile() {
				// alert("delete");
				// alert(this.$store.state.folder.select.id);

				if(this.$store.state.folder.select.style == 'folder'){

					if(window.confirm('是否要删除该文件夹?')) {
						if(this.$store.state.folder.path.length == 1) {
		          		
			          		for(var i = 0; i < this.$store.state.folder.Root.childrenFolder.length; i++) {

			          			if(this.$store.state.folder.select.id == this.$store.state.folder.Root.childrenFolder[i].id) {
			          				this.$store.state.folder.Root.childrenFolder.splice(i, 1);
			          			}
			          		}

			          	} else {
			          		
			          		var currFolder = this.$store.state.folder.Root.childrenFolder;
			          		var parentFolder = {};

			          		for(var i = 1; i < this.$store.state.folder.path.length; i++) {
			          			console.log(this.$store.state.folder.path[i]);
			          			console.log(currFolder);
			          			for(var j = 0; j < currFolder.length; j++) {
			          				console.log("currFolder is : ");
			          				console.log(currFolder[j]);
			          				
			          				if(currFolder[j].id == this.$store.state.folder.path[i]) {
			          					console.log("right!!!!");
			          					parentFolder = currFolder[j];
			          					currFolder = currFolder[j].childrenFolder;
			          					console.log(currFolder);
			          					// break;
			          				}
			          			}
			          		}

			          		
			          		console.log(currFolder);
			          		for(var k = 0; k < parentFolder.childrenFolder.length; k++) {

			          			if(this.$store.state.folder.select.id == parentFolder.childrenFolder[i].id) {
			          				parentFolder.childrenFolder.splice(i, 1);
			          			}
			          		}

			          	}
					} else {

					}

				} else {

					if(window.confirm('是否要删除该文件?')) {
						if(this.$store.state.folder.path.length == 1) {
		          		
			          		for(var i = 0; i < this.$store.state.folder.Root.file.length; i++) {

			          			if(this.$store.state.folder.select.id == this.$store.state.folder.Root.file[i].id) {
			          				this.$store.state.folder.Root.file.splice(i, 1);
			          			}
			          		}

			          	} else {
			          		
			          		var currFolder = this.$store.state.folder.Root.childrenFolder;
			          		var parentFolder = {};

			          		for(var i = 1; i < this.$store.state.folder.path.length; i++) {
			          			console.log(this.$store.state.folder.path[i]);
			          			console.log(currFolder);
			          			for(var j = 0; j < currFolder.length; j++) {
			          				console.log("currFolder is : ");
			          				console.log(currFolder[j]);
			          				
			          				if(currFolder[j].id == this.$store.state.folder.path[i]) {
			          					console.log("right!!!!");
			          					parentFolder = currFolder[j];
			          					currFolder = currFolder[j].childrenFolder;
			          					console.log(currFolder);
			          					// break;
			          				}
			          			}
			          		}

			          		console.log(parentFolder);
			          		console.log(currFolder);
			          		for(var k = 0; k < parentFolder.file.length; k++) {

			          			if(parentFolder.file[k].id = this.$store.state.folder.select.id) {

			          				parentFolder.file.splice(k, 1);
			          			}
			          		}

			          	}
					} else {

					}

				}

			},
			lock() {
				this.$store.state.folder.select.lock = 1;
				if(this.$store.state.folder.select.lock) {
					
					alert("文件已加锁");
				} else {
					alert("请选择文件进行加锁4");
				}
			},
			Logout() {

				this.$store.commit('USER_SIGINOUT');
				this.$router.replace({ path: '/login' });
			}
		},
		components: {
			Sidebar, DataTable
		}
	}
</script>