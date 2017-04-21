var mongoose = require("mongoose"),
schema = mongoose.Schema,
bcrypt = require("bcrypt-nodejs")


var User =  schema({
	email:{type:String, unique:true},
	password:{type:String},
	name:{type:String},
	lastname:{type:String},
	firstname:{type:String}
})


User.set('toJSON', {
    transform: function(doc, ret, options) {
        var retJson = {
            email: ret.email,
            name:ret.name
        };
        return retJson;
    }
});



User.pre("save", function(next){

			var user = this
			//before we save password, encrypt the password
			bcrypt.genSalt(11, function(err, result){
					if(err)
						return next(err)
				bcrypt.hash(user.password, result, null, function(err, hash){
						if(err)
							return next(err)
						//if hash was successful, save it as the password
					
						user.password = hash
						user.name = user.firstname + " " + user.lastname;

						return next()
				})
			})
			
})


User.methods.comparePassword = function(password, hash, done){
			console.log(hash)
		bcrypt.compare(password, hash, function(err, isMatch){
				if(err)
					return done(err)
					return done(err, isMatch)

		} )
}


module.exports = mongoose.model("User", User)