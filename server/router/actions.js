var User  =require("../models/user")
exports.findUserByEmail = function(email, done){

			User.findOne({email:email}, function(err, existingUser){

							if(err)
								return done(err, null)
							return done(null, existingUser)
			})
}

exports.sendToken = function(res, token){
	res.send({token:token}).end()
}

exports.ERRORMESSAGE = function(res,message){
		res.send({error:message}).end()
}