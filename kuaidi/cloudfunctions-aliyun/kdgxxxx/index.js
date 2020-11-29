'use strict';
/*
更新快递的在路上的信息
*/
const db = uniCloud.database() 
exports.main = async (event, context) => {
	
	const collection = db.collection('kdcx')    //对User集合的获取；
	//根据id更新值

	let res = await collection.doc(event.id).update(
	{
		mdd: event.mdd,
		time: event.time
	})
	
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return {
		code:200,
		msg:'修改成功',
		data:res.data
	}
};
