<template>
	<view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">请输入账号</view>
				<input class="uni-input" @input="onKeyInput" focus placeholder="账号" />
			</view>

			<view class="uni-form-item uni-column">
				<view class="title">请输入密码</view>
				<input class="uni-input" @input="pwd" password type="text" placeholder="密码" />
			</view>
			<button type="default" @click="open">登陆</button>
		</view>
		<br><br><br><br>
		<view>
			提示：输入账号密码后，系统将自动判断是否存在账户，如果存在则进入APP
			如果不存在，则自动在数据库中建立账户
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database(); //代码块为cdb

	export default {
		data() {
			return {
				username: '',
				password: ''

			}
		},
		methods: {
			onKeyInput: function(event) {
				this.username = event.target.value
			},
			pwd: function(event) {
				this.password = event.target.value
			},
			open() {
				let that = this
				uniCloud.callFunction({
					name: "login",
					data: {
						username: this.username
					},
					success(res) {
						console.log(that.password)
						if (that.username === res.result.data[0].username) {
							if (that.password === res.result.data[0].password) {
								//账号密码正确跳转页面
								uni.showToast({
									title: '密码正确',
									duration: 2000
								});
								uni.navigateTo({
									url: '/pages/index/index'
								});
							} else {
								//弹窗报错
								uni.showToast({
									title: '密码错误',
									icon: Error,
									duration: 2000
								});
							}
						} else {
							//创建新用户
							uni.showModal({
								title: '提示',
								content: '是否创建新账户？',
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
				})

				// console.log(this.username)
				// console.log(this.password)
			}


		},
		// onLoad() {
		// 			uniCloud.callFunction({
		// 				name:"login",
		// 				data:{
		// 					username:"admin"
		// 				},
		// 				success(res){
		// 					console.log('云函数调用成功',res);
		// 				}
		// 			})
		// 		},

	}
</script>

<style scoped>
	.nvue-page-root {
		background-color: #F8F8F8;
		padding-bottom: 20px;
	}

	.page-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 35rpx;
	}

	.page-title__wrapper {
		padding: 0px 20px;
		border-bottom-color: #D8D8D8;
		border-bottom-width: 1px;
	}

	.page-title__text {
		font-size: 16px;
		height: 48px;
		line-height: 48px;
		color: #BEBEBE;
	}

	.title {
		padding: 5px 13px;
	}

	.uni-form-item__title {
		font-size: 16px;
		line-height: 24px;
	}

	.uni-input-wrapper {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding: 8px 13px;
		flex-direction: row;
		flex-wrap: nowrap;
		background-color: #FFFFFF;
	}

	.uni-input {
		height: 28px;
		line-height: 28px;
		font-size: 15px;
		padding: 0px;
		flex: 1;
		background-color: #FFFFFF;
	}

	.uni-icon {
		font-family: uniicons;
		font-size: 24px;
		font-weight: normal;
		font-style: normal;
		width: 24px;
		height: 24px;
		line-height: 24px;
		color: #999999;
	}

	.uni-eye-active {
		color: #007AFF;
	}
</style>
