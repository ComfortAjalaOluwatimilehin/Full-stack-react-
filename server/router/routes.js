var jwt = require("jwt-simple"),
config = require("../../config"),
ACTIONS = require("./actions"),
User = require("../models/user")


const tokenForUser = function(user){

		var payload = {sub:user._id, iat:new Date().getTime()}

		return jwt.encode(payload, config.SECRET)
}





exports.LOGIN = function(req,res,next){
		console.log(req.user)
	if("error" in req.user && req.user.error)
		return ACTIONS.ERRORMESSAGE(res, "The email or password is wrong")
	else
		return ACTIONS.sendToken(res, tokenForUser(req.user))
}


exports.REGISTER = function(req,res,next){

			var user = {email:req.body.email, password:req.body.password, firstname:req.body.firstname, lastname:req.body.lastname}
			//check if email and password exiss
			console.log("user", user)
			if(!user.email || !user.password || !user.firstname || !user.lastname)
				return res.send({error:"A Field is Empty"})
			//if exists, create new User
			//first check if the email does not already exist
			return ACTIONS.findUserByEmail(user.email, function(err,existingUser){

						if(err)
							return next(err)
						if(existingUser)
							return res.send({error:"user already exists"})

						//user does not exist

						var newuser = new User(user)
						//save new user
						newuser.save(function(err){
							if(err)
								return next(err)

							//send the user the token
							return ACTIONS.sendToken(res, tokenForUser(newuser))
						})
			})

}


exports.SECRET = function(req,res,next){

			res.send({secret:"I am Like ME!"}).end()
}


exports.GET_PROFILE = function(req,res,next){
					res.send({user:req.user}).end()

}