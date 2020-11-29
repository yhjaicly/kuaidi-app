'use strict';
/*
修改快递信息
*/
const db = uniCloud.database() 
exports.main = async (event, context) => {
	
	const collection = db.collection("kdcx")    //对User集合的获取；
	
	let res = await collection.add({    //await是用于是res的同步，这里add添加的是一个对象
			kddh: event.kddh,
			kdname: event.kdname,
			time: event.time,
			qsd: event.qsd,
			mdd: event.mdd,
			skdname: event.skdname,
			sname: event.sname
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
