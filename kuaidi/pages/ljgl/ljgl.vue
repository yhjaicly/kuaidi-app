<template>
	<view>
		<view>
			<form @submit="formSubmit" @reset="formReset">

				<view class="uni-form-item uni-column">
					<view class="title">快递单号：{{kddh}}</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">快递员姓名</view>
					<input class="uni-input" v-model="kdname" focus name="input" placeholder="快递员姓名的姓名" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">寄件人姓名</view>
					<input class="uni-input" v-model="jname" focus name="input" placeholder="寄件人的姓名" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">寄件人手机号</view>
					<input class="uni-input" v-model="jphone" type="number" name="input" placeholder="寄件人的手机号" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">寄件人地址</view>
					<input class="uni-input" v-model="jaddress" name="input" placeholder="寄件人的地址" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">收件人姓名</view>
					<input class="uni-input" v-model="sname" name="input" placeholder="收件人的姓名" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">收件人手机号</view>
					<input class="uni-input" v-model="sphone" type="number" name="input" placeholder="收件人的手机号" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">收件人地址</view>
					<input class="uni-input" v-model="saddress" name="input" placeholder="收件人的地址" />
				</view>



				<view class="uni-form-item uni-column">
					<view class="title">重量（默认单位为kg）</view>
					<uni-number-box @change="bindChange">></uni-number-box>
				</view>

				<view class="uni-form-item uni-column">
					<view class="title">保价金额（默认单位元）</view>
					<uni-number-box :min="0" :max="10000" @change="baojia"></uni-number-box>
				</view>
				
				<view class="test">
					<button type="primary" @tap="show">支付金额</button>
					<popup-layer ref="popupRef" :direction="'top'">
						<view class="box">
							<view>金额：{{tolmoney}}元</view>
							<button type="primary" @tap="close">跳转到支付页面</button>
						</view>
					</popup-layer>
				</view>
				<view class="uni-btn-v">
					<button form-type="submit">提交订单</button>
					<button type="default" form-type="reset">清除全部数据</button>
				</view>
			</form>
			<u-tabbar :list="tabbar" :mid-button="true"></u-tabbar>
		</view>
	</view>
</template>
<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	import popupLayer from '@/components/popup-layer.vue'
	function timeStamp(value) {
		var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var year = date.getFullYear();
		var month = ("0" + (date.getMonth() + 1)).slice(-2);
		var sdate = ("0" + date.getDate()).slice(-2);
		var hour = ("0" + date.getHours()).slice(-2);
		var minute = ("0" + date.getMinutes()).slice(-2);
		var second = ("0" + date.getSeconds()).slice(-2);
		// 拼接
		var result = year + "." + month + "." + sdate + " " + hour + ":" + minute //+ ":" + second;
		// 返回
		return result;
	}
	export default {
		components: {
			uniNumberBox
		},
		components: {
			popupLayer
		},
		
		data() {
			return {
				kddh: '',
				kdname: '',
				jname: '',
				jphone: '',
				jaddress: '',
				sname: '',
				sphone: '',
				saddress: '',
				zl: '',
				money: 0,
				bj: '',
				tolmoney: 0,
				boolShow: false,
				ispay: true,
				timeArray: '',
				tabbar:''
			}
		},
		methods: {			
			formSubmit: function(e) {
				var that = this
				that.timeArray = (new Date()).getTime();
				console.log(that.saddress)
				console.log(timeStamp(that.timeArray))
				//判断是否支付成功，如果没有支付成功则弹出请先支付
				if(that.ispay){
					uniCloud.callFunction({
						name: "tjdd",
						data: {
							kddh: that.kddh,
							kdname: that.kdname,
							jname: that.jname,
							jphone: that.jphone,
							jaddress: that.jaddress,
							sname: that.sname,
							sphone: that.sphone,
							saddress: that.saddress,
							zl: that.zl,
							money: that.money,
							bj: that.bj,
							tolmoney: that.tolmoney,
							ispay: that.ispay,
							timeArray: timeStamp(that.timeArray)
						},
						success(res) {
							
							uniCloud.callFunction({
								name: "addkdxx",
								data: {
									kddh: that.kddh,
									kdname: that.kdname,
									time: that.timeStamp(that.timeArray),
									qsd: that.jaddress,
									mdd: that.saddress,
									skdname: that.kdname,
									sname: that.sname
									
								},
								success(res) {
									console.log(that.saddress)
								}
								});
							
							console.log("快递下单成功")
							uni.navigateTo({
								url: '/pages/xdcg/xdcg'
							});
						}
						});
				}
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify())
				// var formdata = e.detail.value
				// uni.showModal({
				// 	content: '表单数据内容：' + JSON.stringify(formdata),
				// 	showCancel: false
				// });
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			bindChange(e) {
				var that = this
				that.zl = e
				that.money = Math.ceil(that.zl) * 10
				console.log(that.money)
			},
			baojia(e) {
				var that = this
				that.bj = e	*0.01
				console.log(that.bj)
			},
			show() {
				var that = this
				that.tolmoney = that.money + that.bj
				this.$refs.popupRef.show(); // 或者 boolShow = rue
			},
			close() {
				this.$refs.popupRef.close(); // 或者 boolShow = false
				uni.navigateTo({
					url:'/pages/zfym/zfym'
				})
			},
		},
		onReady() {
			var that = this
			let str = "",
				range = 12,
				arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			for (let i = 0; i < range; i++) {
				var pos = Math.round(Math.random() * (arr.length - 1));
				str += arr[pos];
			}
			this.kddh = str
		},
		
		onLoad() {
			this.tabbar =  [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '分公司',
						isDot: true,
						customIcon: false,
						pagePath: '/pages/fgsgl/fgsgl'
					},
					{
						iconPath: "photo",
						selectedIconPath: "photo-fill",
						text: '分站',
						customIcon: false,
						pagePath: '/pages/fzgl/fzgl'
						
					},
					{
						iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
						text: '揽件',
						midButton: true,
						customIcon: false,
						pagePath: '/pages/ljgl/ljgl'
					},
					{
						iconPath: "play-right",
						selectedIconPath: "play-right-fill",
						text: '发货',
						customIcon: false,
						pagePath: '/pages/fhgl/fhgl'
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						isDot: false,
						customIcon: false,
						pagePath: '/pages/index/index'
					}
				]
		}
	}
</script>

<style>
	.uni-form-item .title {
		padding: 20rpx 0;
	}
</style>
