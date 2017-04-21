var webpack = require("webpack"),
 path = require("path")


module.exports = {
	entry: path.resolve(__dirname, "src", "index"),
	output:{filename:"bundle.js", path:path.resolve(__dirname, "public")},
	module:{
		loaders:[
			{test:/.jsx?$/, loader:"babel-loader", exclude:/node_modules/}
		]
	},
	resolve:{
		extensions:[" s", ".",".js",".jsx",".css","json"]
	}
}



