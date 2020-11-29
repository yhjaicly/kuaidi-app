<template>
	<view class="content">
		<!-- <u-notice-bar type="error" :more-icon="true" :speed="100" :list="list"></u-notice-bar>
 -->

<br/>

		<u-search style="width: 98%;" :show-action="true" action-text="搜索" :animation="true" @search="confirm" @custom="confirm" v-model="searchVal"></u-search>




<br/>
<br/><br/>


<u-cell-group>
		<u-cell-item icon="setting-fill" title="个人设置"></u-cell-item>
		<u-cell-item icon="integral-fill" title="会员等级" value="新版本"></u-cell-item>
	</u-cell-group>
	
	<u-cell-group>
			<u-cell-item icon="setting-fill" title="个人设置"></u-cell-item>
			<u-cell-item icon="integral-fill" title="会员等级" value="新版本"></u-cell-item>
		</u-cell-group>

<u-grid :col="3">
		<u-grid-item>
			<u-icon name="photo" :size="50"></u-icon>
			<view class="grid-text">图片</view>
		</u-grid-item>
		<u-grid-item>
			<u-icon name="lock" :size="50"></u-icon>
			<view class="grid-text">锁头</view>
		</u-grid-item>
		<u-grid-item>
			<u-icon name="hourglass" :size="50"></u-icon>
			<view class="grid-text">沙漏</view>
		</u-grid-item>
	</u-grid>
	<u-grid :col="3">
			<u-grid-item>
				<u-icon name="photo" :size="50"></u-icon>
				<view class="grid-text">图片</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="lock" :size="50"></u-icon>
				<view class="grid-text">统计</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="hourglass" :size="50"></u-icon>
				<view class="grid-text">设置</view>
			</u-grid-item>
		</u-grid>

		<!-- 
		<uni-grid :column="3">
			<navigator url="/pages/fgsgl/fgsgl" open-type="navigate">
				<uni-grid-item>
					<text class="text">分公司管理</text>
				</uni-grid-item>
			</navigator>

			<navigator url="/pages/fzgl/fzgl" open-type="navigate">
				<uni-grid-item>
					<text class="text">分站管理</text>
				</uni-grid-item>
			</navigator>

			<navigator url="/pages/kdygl/kdygl" open-type="navigate">
				<uni-grid-item>
					<text class="text">快递员管理</text>
				</uni-grid-item>
			</navigator>
		</uni-grid>

		<uni-grid :column="3">
			<navigator url="/pages/ljgl/ljgl" open-type="navigate">
				<uni-grid-item>
					<text class="text">揽件管理</text>
				</uni-grid-item>
			</navigator>

			<navigator url="/pages/fhgl/fhgl" open-type="navigate">
				<uni-grid-item>
					<text class="text">发货管理</text>
				</uni-grid-item>
			</navigator>
			<navigator url="/pages/tjgn/tjgn" open-type="navigate">
				<uni-grid-item>
					<text class="text">统计功能</text>
				</uni-grid-item>
			</navigator>
		</uni-grid> -->
		
		<u-tabbar  :list="tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	//6个格子
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	//搜索框
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components: {
			uniGrid,
			uniGridItem
		},
		components: {
			uniSearchBar
		},
		data() {
			return {
				list: [
									'代写项目',
									'100000元/篇',
									'诚信为本',
									'童叟无欺'
								],
				current: 0,
				title: 'Hello',
				searchVal: '',
				tabbar: ''
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
		},
		methods: {
			confirm() {
				var that = this
				uni.navigateTo({
					url: '/pages/search/search?kddh=' + that.searchVal + '',
					success: res => {
						console.log("god")
					},
					fail: () => {
						console.log("bad")
					},
					complete: () => {}
				});
			}
		}
	}
</script>

<style  scoped lang="scss">
	
	.grid-text {
			font-size: 28rpx;
			margin-top: 50rpx;
			color: $u-type-info;
		}
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
