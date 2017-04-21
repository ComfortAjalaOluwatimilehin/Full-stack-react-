import React, {Component} from "react"
import PropTypes from 'prop-types';
import {ArrayofRoutes} from "./routes";
import {Route,Link} from "react-router-dom"
import Header from "./header"




const App = () => (

			
					<div>
							<Header />
							{ArrayofRoutes.map((route, i)=>(
									<Route path={route.path} component={route.component} key={i} />
								))}
							
					</div>
			


	) 



export default App;