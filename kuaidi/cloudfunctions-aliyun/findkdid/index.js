'use strict';
/*
找到快递的id
*/
const db = uniCloud.database() 
exports.main = async (event, context) => {
	
	const collection = db.collection("kdcx")    //对User集合的获取；
	
	let res = await collection.where({
			kddh:event.kddh
		}).get()
	
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return {
		code:200,
		msg:'修改成功',
		data:res.data
	}
};
