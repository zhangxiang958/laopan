<style>
	.carousel-container {
		position: relative;
		margin: 5% auto;
		width: 100%;
		height: 450px;
	}
	.carousel-container ul {
		margin: 0 auto;
		padding: 0;
		list-style-type: none;
		text-align: center;
	}
	.carousel {
		position: relative;
		margin: 10px auto;
		width: 960px;
		height: 100%;
		border: 8px solid white;
		border-radius: 5px;
	}
	.carousel-show {
		position: relative;
		/*width: 500px;*/
		width: 100%;
		height: 100%;
		border: 1px solid #ccc;
		/*overflow: hidden;*/
	}
	.carousel-show li {
		position: absolute;
		top: 0;
		left: 0;
		/*width: 500px;*/
		width: 100%;
		height: 100%;
		opacity: 0;
		filter: alpha(opacity=0);
	}
	.carousel-show img {
		width: 100%;
		height: 100%;
	}
	.carousel-show .current {
		opacity: 1;
		filter: alpha(opacity=100);
	}
	.carousel-focus {
		position: absolute;
		bottom: 0;
		right: 0;
	}
	.carousel-focus li {
		float: left;
		margin-right: 5px;
		width: 20px;
		line-height: 20px;
		border-radius: 20px;
		background-color: #f90;
		color: #fff;
		text-align: center;
		cursor: pointer;
		opacity: 0.7;
		filter: alpha(opacity=70);
		overflow: hidden;
	}
	.carousel-focus li.current {
		color: #fff;
		opacity: 1;
		filter: alpha(opacity=100);
		font-weight: 700;
		background-color: #f60;
	}
	.Audio {
		display: block;
		margin: 0 auto;
		width: 100%;
	}
	.upload {
		margin-top: 50px;
	}
	.register {
		margin-top: 100px;
	}
	.register form {
		margin-top: 50px;
	}
</style>

<template>
	<div id="pandect">
		<div class="carousel-container">	
			<ul class="carousel-show">
				<li class="current"><img src="./img/1.jpg" alt=""></li>
				<li><img src="./img/2.jpg" alt=""></li>
				<li><img src="./img/3.jpg" alt=""></li>
				<li><img src="./img/4.jpg" alt=""></li>
				<li><img src="./img/5.jpg" alt=""></li>
			</ul>
			<ul class="carousel-focus">
				<li class="current">1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
			</ul>
		</div>

		<audio controls="controls" class="Audio">
			<source src="./mp3/aLIEz.mp3" type="audio/mpeg">
			Your browser does not support the audio element.
		</audio>
		<div class="upload">
			文件上传
			<div class="am-form-group am-form-file">
				<button type="button" class="am-btn am-btn-danger am-btn-sm">
				<i class="am-icon-cloud-upload"></i> 选择要上传的文件</button>
				<input id="doc-form-file" type="file" multiple v-on:change="upload">
			</div>
			<div id="file-list"></div>
		</div>
		<div class="register">
			注册帐号
			<div class="am-g">
				<div class="am-u-md-8 am-u-sm-centered">
					<form class="am-form">
						<fieldset class="am-form-set">
							<input type="text" placeholder="填下帐号(6位英文)" id="acc" required>
							<input type="text" placeholder="设个密码(6位英文)" id="pass" required>
							<input type="email" placeholder="填下邮箱" id="mail" required>
							<input type="email" placeholder="填下学号(311400****)" id="num" required>
						</fieldset>
						<button type="submit" class="am-btn am-btn-primary am-btn-block" @click="register">注册个账号</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			
			this.show = this.show.bind(this);
			this.autoPlay = this.autoPlay.bind(this);

			this.carousel = document.getElementsByClassName('carousel-container')[0];
			this.list = this.carousel.getElementsByTagName("ul");
			this.lImg = this.list[0].getElementsByTagName('li');
			this.lNum = this.list[1].getElementsByTagName("li");
			this.timer = this.play = null;
			this.i = this.index = 0;
			this.turn = false; //turn 表示方向，false表示从左到右，true表示从右到左
			this.autoPlay();
			//焦点切换
			for(var i = 0; i < this.lNum.length; i ++){
					this.lNum[i].index = i;
					this.lNum[i].onmouseover = function() {
						this.show(this.index);
					}
			}
		},
		data() {
			return {
				carousel: null,
				list: null,
				lImg: null,
				lNum: null,
				timer: null,
				play: null,
				i : 0,
				index: 0,
				turn: false, //turn 表示方向，false表示从左到右，true表示从右到左
			}
		},
		methods: {
			autoPlay(){
				var that = this;
				this.play = setInterval(function() {
			
					if(!that.turn) {  //从左到右

						that.index ++;
						that.index >= that.lImg.length - 1 && (that.turn = true);
						that.show(that.index);
						
					} else {
						
						that.index --;
						that.index == 0 && (that.turn = false);
						that.show(that.index);
					}

				},2000);
			},
			show(a) {
				var that = this;
				that.index = a;
				var alpha = 0;
				for(var i = 0; i < that.lNum.length; i++) {
					that.lNum[i].className = "";
				}
				that.lNum[that.index].className = "current";
				clearInterval(that.timer);

				for(var i = 0; i < that.lImg.length; i++) {
					that.lImg[i].style.opacity = 0;
					that.lImg[i].style.filter = "alpha(opacity=0)";
				}

				that.timer = setInterval(function() {
					alpha += 2;
					alpha > 100 && (alpha = 100);
					that.lImg[that.index].style.opacity = alpha / 100;
					that.lImg[that.index].style.filter = "alpha(opacity = " + alpha + ")";
					alpha == 100 && clearInterval(that.timer);
				},20);
			},
			upload() {
				var fileNames = '';
				var fileBtn = document.getElementById("doc-form-file");
				var fileList = document.getElementById('file-list');

				[].forEach.call(fileBtn.files, function(data, index){
					fileNames += '<span class="am-badge">' + data.name + ' 大小: ' + data.size  + ' 字节' + '</span> '
				});

				fileList.innerHTML = fileNames;
			},
			register() {
				var acc = document.getElementById('acc');
				var pass = document.getElementById('pass');
				var mail = document.getElementById('mail');
				var num = document.getElementById('num');

				if(!/^[a-zA-Z]{6}/.test(acc.value)) {
					
					alert('请输入 6 位英文帐号');
					return;
				} else if(!/^[a-zA-Z]{6}/.test(pass.value)) {
					
					alert('请输入 6 位英文密码');
					return;
				} else if(!/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(mail.value)) {

					alert('请输入正确的邮箱地址');
					return;
				} else if(!/^311400[0-9]{4}/.test(num.value)){
					alert('请输入正确学号');
					return;
				}
				alert('注册成功');
			}
		}
	}
</script>