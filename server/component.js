import React from "react"
import  ReactDOMServer from "react-dom/server"
import App from "../src/components/app"
import {ArrayofRoutes as routes} from "../src/components/routes"
import {StaticRouter, matchPath, match} from "react-router-dom"
import path from "path"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import reducers from "../src/reducers/index"
import * as ACTIONS from "../src/actions/index"



module.exports = function(app){

		var componentHandler = function(req,res,next){



					var match = routes.reduce((acc, route) => matchPath(req.url, route) || acc, null)


					if(!match){
						console.log(req.url)
						res.redirect(302, req.url)
							return 
						
					}else{

						var store = createStore(reducers, applyMiddleware(thunk));
							const context = {}

						const html = ReactDOMServer.renderToString(
								<Provider store={store}>
									<StaticRouter location={req.url} context={context}>
															<App />
									</StaticRouter>
						</Provider>


						)

					var preloadedState = (store.getState())
		
						res.render("index", {html:html, preloadedState, stringify: require('js-stringify')})

					}

						return 

		}

		app.get("/", componentHandler)
		app.get("/login", componentHandler)
		app.get("/register", componentHandler)
		app.get("/secret", componentHandler)
		app.get("/profile", componentHandler)


}