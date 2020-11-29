<template>
	<view>
		<view>分公司管理</view>
		<u-tabbar  :list="tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbar: ''
			}
		},
		methods: {
			
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
