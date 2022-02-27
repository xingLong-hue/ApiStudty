var dbConfig = require('../util/dbconfig.js')
//获取分类
getCate = (req,res) => {
	var sql = "select * from cate"
	var sqlArr = []
	var callBack = (err, data) => {
		if (err) {
			console.log("来接出错了")
			return
		}
		res.send({
			'Data': data
		})
	}
	dbConfig.sqlConnect(sql,sqlArr,callBack);
}
// 获取指定的参数列表

getPostCate= (req,res) => {
	var sql = `select * from post where cate_id=?`
	const {id}=req.query
	var sqlArr = [id]
	var callBack = (err, data) => {
		if (err) {
			console.log("来接出错了")
			return
		}
		res.send({
			'Data': data
		})
	}
	dbConfig.sqlConnect(sql,sqlArr,callBack);
}

// 最后吧这个函数暴露出去

module.exports={
	getCate,
	getPostCate
}
