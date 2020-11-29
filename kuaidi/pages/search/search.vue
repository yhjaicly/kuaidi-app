<template>
	<view>
		8月1日 12：00 和平分站 张三 收件
		<view>快递号为{{kddh}}</view>
		<view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 kddh: '',
				 kdname: '',
				 time: '',
				 qsd: '',
				 mdd: '',
				 skdname: '',
				 sname: ''
			}
		},
		methods: {
			
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		       this.kddh = option.kddh
		    },
		onReady() {
			var that = this
			uniCloud.callFunction({
				name: "kdcx",
				data: {
					kddh: that.kddh
				},
				success(res) {
					that.id = res.result.data[0]._id
					console.log(that.id)
					
					//将快递在路上的信息加入数据库
					uniCloud.callFunction({
						name: "updatekdxx",
						data: {
							id: that.id
						},
						success(res) {
							
						}
						});
					
					//已获取到快递信息，需要循环输出
				}
				})
		}
	}
</script>

<style>

</style>
