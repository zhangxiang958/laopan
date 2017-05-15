<style>
	.file-path {
		border-bottom: 1px solid #eee;
	}
	.checkornot {
		width: 30px;
	}
	.dir-i span {
		margin-left: 5px;
	}
	.islock i {
		margin-left: 15px;
	}
	.back {
		cursor: pointer;
	}
	tr {
		cursor: pointer;
	}
</style>

<template>
	<div id="content">
		<ol class="am-breadcrumb am-breadcrumb-slash file-path">
  			<li v-if="pathName.length !== 1" class="back">
  				<a  @click="cd">返回上一级</a>
  			</li>
  			<li v-for="item in pathName">
  				<a>{{ item }}</a>
  			</li>
  			<!-- <li class="am-active">
  				内容
  			</li> -->
		</ol>
		<div class="content-file">
			<table class="am-table am-table-striped">
			    <thead>
			        <tr>
			        	<th class="checkornot">
			        		<input type="checkbox" id="checkCtl">
			        	</th>
			            <th>文件名称</th>
			            <th>所有者</th>
			            <th>文件类型</th>
			            <th>创建时间</th>
			            <!-- <th>物理地址</th> -->
			            <th>保护锁</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr v-for="(item, index) in rootFolder" v-on:dblclick="enterFolder(index)">
						
			        	<td>
			        		<input type="checkbox" id="checkCtl" v-on:change="selectThis(item)">
			        	</td>
			            <td>
			            	<i class="am-icon-folder-o dir-i" aria-hidden="true" >
		 						<span>{{ item.name }}</span>
		 					</i>
			            </td>
			            <td>{{ item.owner }}</td>
			            <td>{{ item.style }}</td>
			           	<td>{{ item.createTime }}</td>
			            <td class="islock">
			            	<i class="am-icon-umbrella dir-i" aria-hidden="true" v-if="item.lock">
		 					</i>
		 					<i class="am-icon-unlock dir-i" aria-hidden="true"  v-else>
		 					</i>
			            </td>
			        </tr>
			        <tr v-for="(item, index) in rootFile" v-on:dblclick="checkFile(item.id, item.name, item.content)">
						
			        	<td>
			        		<input type="checkbox" id="checkCtl" v-on:change="selectThis(item)">
			        	</td>
			            <td>
			            	<i class="am-icon-file-o dir-i" aria-hidden="true" >
		 						<span>{{ item.name }}</span>
		 					</i>
			            </td>
			            <td>{{ item.owner }}</td>
			            <td>{{ item.style }}</td>
			           	<td>{{ item.createTime }}</td>
			            <td class="islock">
			            	<i class="am-icon-umbrella dir-i" aria-hidden="true" v-if="item.lock">
		 					</i>
		 					<i class="am-icon-unlock dir-i" aria-hidden="true"  v-else>
		 					</i>
			            </td>
			            <!-- {{ rootFolder }} -->
			            <!-- {{ rootFile }} -->
			        </tr>
			    </tbody>
			</table>
		</div>
		<!-- modal -->
		<div class="am-modal am-modal-prompt" tabindex="-1" id="FileContent">
		    <div class="am-modal-dialog">
		      	<div class="am-modal-hd">修改文件</div>
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
		<!-- modal end -->
	</div>
</template>

<script>
	export default {
		mounted() {

		},
		data() {
			
			return {
				rootFolder: this.$store.state.folder.currFolder.childrenFolder,
				rootFile: this.$store.state.folder.currFolder.file,
				RootFolder: JSON.parse(window.localStorage.getItem('Root') === '' ?  '{}' : window.localStorage.getItem('Root')),
				pathName: this.$store.state.folder.pathName,
				fileName: '',
				fileContent: ''
			}
		},
		methods: {
			cd() {
				if(this.$store.state.folder.path.length == 2) {

					this.$store.commit('ENTER_FOLDER', this.$store.state.folder.Root);
					console.log(this.$store.state.folder.currFolder);
					this.rootFolder = this.$store.state.folder.Root.childrenFolder;
					this.rootFile = this.$store.state.folder.Root.file;
					this.$store.commit('CD_LASTPATH');
	          	} else {
	          		
	          		var currFolder = this.$store.state.folder.Root.childrenFolder;
	          		var parentFolder = {};


	          		for(var i = 1; i < this.$store.state.folder.path.length - 1; i++) {
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

	          		
	          		this.$store.commit('ENTER_FOLDER', parentFolder);
					console.log(this.$store.state.folder.currFolder);
					this.rootFolder = parentFolder.childrenFolder;
					this.rootFile = parentFolder.file;
					this.$store.commit('CD_LASTPATH');
	          	}
			},
			enterFolder(index) {
				// alert(index);
				alert(this.rootFolder[index].id);
				this.$store.commit('ENTER_FOLDER', this.rootFolder[index]);
				this.$store.commit('CHANGE_PATH', this.rootFolder[index].id);
				this.$store.commit('CHANGE_PATHNAME', this.rootFolder[index].name);

				console.log(this.rootFolder[index]);
				console.log(this.rootFolder[index].file);
				this.rootFile = this.rootFolder[index].file;
				console.log(this.rootFile);
				this.rootFolder = this.rootFolder[index].childrenFolder;
				console.log(this.rootFolder);
			},
			checkFile(id, name, content) {

				this.fileName = name;
				this.fileContent = content;

				var that = this;

				$('#FileContent').modal({
			        relatedTarget: this,
			        onConfirm: function(options) {
			        	
			        	var file = {
							'id': id,
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
			          		for(var i = 0; i < Root.file.length; i++) {

			          			if(id == Root.file[i].id) {
			          				Root.file[i].name = name;
			          				Root.file[i].content = content;
			          			}
			          		}

			          		// Root.file.push(file);
			          		window.localStorage.setItem('Root',JSON.stringify(Root));
			          		that.$store.commit('ADD_FILE', Root);
			          		// console.log(that.$store.state.folder.Root);

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
			          		for(var i = 0; i < parentFolder.file.length; i++) {

			          			if(id == parentFolder.file[i].id) {
			          				parentFolder.file[i].name = that.fileName;
			          				parentFolder.file[i].content = that.fileContent;
			          				console.log(parentFolder.file[i]);
			          			}
			          		}
			          		// parentFolder.file.push(file);
			          	}

			          	// window.localStorage.setItem('Root',JSON.stringify(Root));
			          	// that.$store.commit('ADD_FILE', Root);
			          	// console.log(that.$store.state.folder.Root);
			        },
			        // closeOnConfirm: false,
			        onCancel: function() {
			          // alert('算求，不弄了');
			        }
			    });
			},
			selectThis(item) {
				
				console.log(item);
				this.$store.commit('SELECT', item);
			}
		}
	}
</script>