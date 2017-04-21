var ROUTES  = require("./routes")


var passport = require("passport")

//call the passport strategies 

require("../services/passport")


//authenticate

var localLOGIN = passport.authenticate("local", {session:false})
var auth_require = passport.authenticate("jwt", {session:false})

module.exports = function(app){

	
			//requires authentication 

			app.use("/auth", auth_require)

		//requires that the user is logged in before the user gets the message
			app.get("/auth/secret", ROUTES.SECRET)

		//requires that the user was successfully logged in and the request body carries the user object; the user object is then used to generate a token, which 
		//sent to frontend for client authentication

			app.post("/login", localLOGIN, ROUTES.LOGIN)

			//requires that the user was successfully registered and the request body carries the user object; the user object is then used to generate a token, which 
		//sent to frontend for client authentication
			app.post("/register", ROUTES.REGISTER)


			app.get("/auth/profile", ROUTES.GET_PROFILE)


			//testing 

			app.get("/home",function(req,res,next){res.send("We are at home").end()})
}