'use strict';
//提交订单页面
const db = uniCloud.database() 
exports.main = async (event, context) => {
	
	const collection = db.collection("order")    //对User集合的获取；
	
	let res = await collection.add({    //await是用于是res的同步，这里add添加的是一个对象
			kddh: event.kddh,
			kdname: event.kdname,
			jname: event.jname,
			jphone: event.jphone,
			jaddress: event.jaddress,
			sname: event.sname,
			sphone: event.sphone,
			saddress: event.saddress,
			zl: event.zl,
			money: event.money,
			bj: event.bj,
			tolmoney: event.tolmoney,
			ispay: event.ispay,
			timeArray: event.timeArray
		})
	
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return {
		code:200,
		msg:'添加成功',
		data:res.data
	}
};
