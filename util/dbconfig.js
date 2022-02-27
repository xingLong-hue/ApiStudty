const mysql=require('mysql')
// const config={
// 	host:'local',
// 	port:'3306',
// 	user:'root',
// 	password:'123'
// }

module.exports={
	//数据库配置
	config:{
		host:'localhost',
		port:'3306',
		user:'root',
		password:'123',
		database:'studyapi'
	},
	//连接数据库，采用连接池的方式
	//连接池对象
	sqlConnect:function(sql,sqlArr,callback){
		var pool=mysql.createPool(this.config)
		pool.getConnection((err,conn)=>{
			console.log("12313")
			if(err){
				console.log("连接失败！！！")
				return
			}
			// 事件驱动回调
			conn.query(sql,sqlArr,callback);
			// 释放连接
			conn.release();
			
		})
	}
	
	
	
}