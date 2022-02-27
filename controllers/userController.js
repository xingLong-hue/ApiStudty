// 模拟验证码发送接口
// 随机生成个四位数的函数
function rand(min,max){
	return Math.floor(Math.random()*(max-min))+min
}
var vailPhone=[]
let sendCodeP = (phone)=>{
	// console.log("55555")
	for(var item of vailPhone){
		if(phone==item.phone){
			return true
		}
	}
	return false
	
}
let findCodeAndPhone=(phone,code)=>{
	for(var item of vailPhone){
		if(phone==item.phone&&code==item.code){
			return 'login'
		}else{
			return 'error'
		}
	}
}
sendCode=(req,res)=>{
	// let phone=req.body.user_phone
	let phone=req.query.phone
	
	// 验证手机是否已发送过
	if(sendCodeP(phone)){
		res.send({
			"code":400,
			"msg":"已经发送过验证码，稍后再发"
		})
	}
	
	let code=rand(1000,9999)
	vailPhone.push({
		"phone":phone,
		"code":code
	})
	// console.log(vailPhone)
	res.send({
		"code":200,
		"msg":'发送成功'
	})
	console.log(code)
	
}
// 验证码登录
CodePhoneLogin=(req,res)=>{
	let {phone,code}=req.query
	// 验证手机是否已发送过
	if(sendCodeP(phone)){
		// 验证手机和验证码
		
		let status=findCodeAndPhone(phone,code)
		
		if(status=='login'){
			res.send({
				"code":200,
				"msg":'登录成功'
			})
		}else {
			res.send({
				"code":400,
				"msg":'登录失败！'
			})
		}
		
	}else{
		res.send({
			"code":400,
			"msg":'未发送验证码！'
		})
	}
	
	
}

module.exports={
	sendCode,
	CodePhoneLogin
}