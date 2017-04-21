var express = require("express"),
morgan = require("morgan"),
mongoose = require("mongoose"),
app = express(),
http = require("http"),
bodyparser = require("body-parser"),
config = require("./config"),
path = require("path"),
passport = require("passport")

//mongoose connection 

var db = mongoose.connect(config.DB_NAME, function(){ console.log("DB Connection at : ", config.DB_NAME)})

mongoose.connection.on('error', function(err) {console.error('MongoDB error: %s', err);});


//app setting
app.use(morgan("combined"))
app.use(bodyparser.json())
app.set("port", process.env.PORT || 3000)
app.set("views", path.resolve(__dirname, "public", "views"))
app.set("view engine", "pug")
app.use(express.static(path.resolve(__dirname, "public")))
app.use(passport.initialize())


//handle the component rendering

require(path.resolve(__dirname, "server", "component.js"))(app)


//routes setting
require(path.resolve(__dirname, "server", "router", "index"))(app)




//server setting


var server = http.createServer(app)
server.listen(app.get("port"), function(){  console.log("server at port: ", app.get("port"))})