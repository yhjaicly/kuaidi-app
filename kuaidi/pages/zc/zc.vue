<template>
	<view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">请输入账号</view>
				<input class="uni-input" @input="onKeyInput" focus placeholder="账号" />
			</view>
		
			<view class="uni-form-item uni-column">
				<view class="title">请输入密码</view>
				<input class="uni-input" @input="pwd"  type="text" placeholder="密码" />
			</view>
			
			<view class="uni-form-item uni-column">
				<view class="title">请再次输入密码</view>
				<input class="uni-input" @input="pwd1"  type="text" placeholder="再次密码" />
			</view>
			<button type="default" @click="open">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				password1:''
			}
		},
		methods: {
			onKeyInput:function(event){
				this.username = event.target.value
			},
			pwd: function(event){
				this.password = event.target.value
			},
			pwd1: function(event){
				this.password1 = event.target.value
			},
			open(){
				let that = this
				
				uniCloud.callFunction({
					name: "login",
					data: {
						username: that.username
					},
					success(res) {						
						if(that.username === res.result.data[0].username){
							uni.showModal({
								title: '提示',
								content: '账户已存在，请重新注册',
								success: function(res) {
									if (res.confirm) {
										console.log('用户点击确定');
										uni.navigateTo({
											url:'/pages/zc/zc'
										})
										
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}else{
							if(that.password === that.password1){
								uniCloud.callFunction({
									name: "addlogin",
									data: {
										username:that.username,
										password:that.password
									},
									success(res) {
										uni.showToast({
											title: '注册成功！',
											duration: 2000
										});
										uni.navigateTo({
											url: '/pages/index/index'
										});
									}
									})
							}else{
								uni.showModal({
									title: '提示',
									content: '俩次输入的密码不一样，请重新输入',
									success: function(res) {
										if (res.confirm) {
											console.log('用户点击确定');
											uni.navigateTo({
												url:'/pages/zc/zc'
											})
											
										} else if (res.cancel) {
											console.log('用户点击取消');
										}
									}
								});
							}
						}
					}
					});
				
				
				
				
			}
		}
	}
</script>

<style>

</style>
