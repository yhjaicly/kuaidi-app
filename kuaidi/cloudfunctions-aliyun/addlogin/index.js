'use strict';
const db = uniCloud.database()               //对数据库的对象获取；
exports.main = async (event, context) => {
	
	const collection = db.collection("login")    //对User集合的获取；
	
	let res = await collection.add({    //await是用于是res1的同步，这里add添加的是一个对象
			username:event.username,
			password:event.password
		})
			
	//event为客户端上传的参数
	console.log(JSON.stringify(res))
	console.log('event : ', event)
	
	//返回数据给客户端
	return {
		code:200,
		msg:'添加账户成功',
		data:res.data
	}
};
