var passport = require("passport"),
LOCAL = require("passport-local").Strategy,
ExtractJwt  = require("passport-jwt").ExtractJwt,
JwtStrategy  = require("passport-jwt").Strategy,
 User = require("../models/user"),
 config = require("../../config")




//LOCAL -- CREATES NEW PASSPORT LOCAL STRATEGY 
var localOptions = {
	"usernameField":"email",
	"passwordField":"password",
	"session":false
}

var login = new LOCAL(localOptions,  function(email, password, done){

						
						

								//search for user using email 

								User.findOne({email:email}, function(err, existingUser){

											if(err)
												return done(err, false)
											if(!existingUser)
													return done(null, {error:true, user:false, errormessage:"Email does not exist"})
											//compare password
									
											existingUser.comparePassword(password, existingUser.password,  function(err, match){
													if(err)
														return done(err, false)
													if(!match)
														return done(null, {error:true, user:false, errormessage:"Password is wrong"})

													//if given password matches the existing user's password -- return the found user
													return done(null, existingUser)
											})
								})
})




var jwtOptions = {
	secretOrKey:config.SECRET,
	jwtFromRequest:ExtractJwt.fromHeader("authorization")
}


var requireauth = new JwtStrategy(jwtOptions, function(payload, done){
				console.log(payload)

						User.findOne({_id:payload.sub}, function(err, foundUser){


						if(err)
							return done(err, false)
						if(!foundUser)
							return done(null, false)
						return done(null, foundUser)
			})

		
})

passport.use(login)
passport.use(requireauth)