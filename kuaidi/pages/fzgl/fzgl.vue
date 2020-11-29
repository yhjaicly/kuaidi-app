<template>
	<view>
		<view>分站管理</view>
		<input class="uni-input" v-model="kddh" focus name="input" placeholder="快递单号" />
		<input class="uni-input" v-model="xdz" name="input" placeholder="当前地址" />

		<button @click="addkdwz">添加快递的当前位置</button>
		<u-tabbar  :list="tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
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
		data() {
			return {
				kddh: '',
				id: '',
				mdd: '',
				xdz:'-',
				time:'',
				tabbar: ''
			}
		},
		methods: {
			//添加快递位置
			addkdwz() {
				let that = this
				that.time = (new Date()).getTime();
				uniCloud.callFunction({
					name: "kdcx",
					data: {
						kddh: that.kddh
					},
					success(res) {
						that.id = res.result.data[0]._id
						that.mdd = res.result.data[0].mdd + that.xdz
						that.time = timeStamp(that.time)
					}
				});
				uniCloud.callFunction({
					
					name: "kdgxxxx",
					data: {
						id: that.id,
						mdd: that.mdd,
						time:that.time
					},
					success(res) {
						
						console.log(that.time)
					}
				});

			}
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

</style>
