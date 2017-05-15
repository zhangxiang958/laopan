<style>
	.left {
		padding: 0;
	}
	.sidebar {
		height: 1000px;
		border-right: 1px solid #eee;
	}
	.function-title {
		cursor: pointer;
	}
	.function-title i {
		display: inline-block;
		margin-left: 30px;
	}
	.function-title span {
		display: inline-block;
		margin-left: 15px;
	}
	.am-list .allFunction {
		background-color: #eee;
	}
</style>

<template>
	<div class="sidebar">
		<ul class="am-list am-list-static am-list-border">
			<li class="function-title allFunction">
				
		 		<i class="am-icon-bars am-icon" aria-hidden="true" >
		 			<span>视图</span>
		 		</i>
		 		<!-- <p><span class="am-icon-home am-icon-lg"></span> .am-icon-lg</p> -->
		   	</li>
			<li class="function-title" >
		    	<!-- <span class="am-badge am-badge-success">YES</span> -->
		    	<i class="am-icon-file-archive-o am-icon" aria-hidden="true" >
					<router-link :to="'/pandect'">
		 				<span>总览</span>
					</router-link>
		 		</i>
		    	
		   	</li>
			<li class="function-title">
		    	<!-- <span class="am-badge am-badge-success">YES</span> -->
		    	<i class="am-icon-file-archive-o am-icon" aria-hidden="true" >
					<router-link :to="'/'">
		 				<span>文件库</span>
					</router-link>
		 		</i>
		    	
		   	</li>
		 	<li class="function-title allFunction">
				
		 		<i class="am-icon-bars am-icon" aria-hidden="true" >
		 			<span>文件功能</span>
		 		</i>
		 		<!-- <p><span class="am-icon-home am-icon-lg"></span> .am-icon-lg</p> -->
		   	</li>
		   	<li class="function-title" @click="createFile">
		    	<!-- <span class="am-badge am-badge-success">YES</span> -->
		    	<i class="am-icon-file-archive-o am-icon" aria-hidden="true" >
		 			<span>新建文件</span>
		 		</i>
		    	
		   	</li>
		   	<li class="function-title" @click="createFolder">
		    	<!-- <span class="am-badge am-badge-success">YES</span> -->
		    	<i class="am-icon-folder am-icon" aria-hidden="true">
		 			<span>新增文件夹</span>
		 		</i>
		    	
		   	</li>
		   	<li class="function-title" @click="editFile">
		    	<!-- <span class="am-badge am-badge-success">YES</span> -->
		    	<i class="am-icon-edit am-icon" aria-hidden="true">
		 			<span>文件编辑</span>
		 		</i>
		    	
		   	</li>
		   	<li class="function-title" @click="deleteFile">
		    	<!-- <span class="am-badge am-badge-success">YES</span> -->
		    	<i class="am-icon-close am-icon" aria-hidden="true">
		 			<span>删除文件</span>
		 		</i>
		    	
		   	</li>
		   	<li class="function-title" @click="lock">
		    	<!-- <span class="am-badge am-badge-success">YES</span> -->
		    	<i class="am-icon-unlock-alt am-icon" aria-hidden="true">
		 			<span>加锁/解锁</span>
		 		</i>
		    	
		   	</li>
		</ul>
	</div>
</template>

<script>
	export default {
		mounted() {
			// this.createFile();
		},
		data() {
			return {
				
			}
		},
		methods: {
			createFile() {

				this.$emit('createFile');
			},
			createFolder() {
				this.$emit('createFolder');
			},
			editFile() {
				this.$emit('editFile');
			},
			deleteFile() {
				this.$emit('deleteFile');
			},
			lock() {
				this.$emit('lock');
			}
		}
	}
</script>