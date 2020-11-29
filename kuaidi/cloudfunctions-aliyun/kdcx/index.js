'use strict';
/*
快递查询：
 "kddh": "快递单号",
  "kdname": "收快递人",
  "time": "当前时间",
  "qsd": "起始地",
  "mdd": "目的地",
  "skdname": "送快递人",
  "sname": "收到快递的人
*/
const db = uniCloud.database() 
exports.main = async (event, context) => {
	
	const collection = db.collection("kdcx")    //对User集合的获取；
	
	let res = await collection.where({
			kddh: event.kddh
		}).get()
	
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return {
		code:200,
		msg:'查询成功',
		data:res.data
	}
};
