'use strict';
const db = uniCloud.database()               //对数据库的对象获取；
exports.main = async (event, context) => {
	
	const collection = db.collection("login")    //对User集合的获取；
	
	// let res1 = await collection.add({    //await是用于是res1的同步，这里add添加的是一个对象
	// 		name:'Tom'
	// 	})
		
	// 	console.log('数据插入：')
	// 	console.log(JSON.stringify(res1))   //将其打印出来
		
	// //根据id删除集合
	// let res2 = await collection.doc('5fb8c168861e0d0001e71a7e').remove()
	// 	console.log('数据删除：')
	// 	console.log(JSON.stringify(res2))
	
		// //根据id更新值
		// let res3 = await collection.doc('5fb8c3e8a93e420001b772b0').update(
		// {
		// 	name:'vue2'
		// })
		// console.log('数据更新：')
		// console.log(JSON.stringify(res3))
		
		// //若不存在则创建；若更新对象记录会被覆盖；
		// let res = await collection.doc('5f8da060c984090001b4a6b9').set(
		// 	{
		// 		name1:'vue1',
		// 		name2:'vue2',
		// 		name3:'vue3'
		// 	})
		// console.log('数据更新：')
		// console.log(JSON.stringify(res))
		//查询数据
		let res = await collection.where({
				username:event.username
			}).get()
			
	//event为客户端上传的参数
	console.log(JSON.stringify(res))
	console.log('event : ', event)
	
	//返回数据给客户端
	return {
		code:200,
		msg:'查询成功',
		data:res1.data
	}
};
