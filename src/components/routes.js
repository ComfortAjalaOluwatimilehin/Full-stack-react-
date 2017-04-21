import React from "react"
import {Route,Link} from "react-router-dom"
import Home from "./home"
import Secret from "./secret"
import Login from "./login"
import Register from "./register"
import Profile from "./profile"
import REQUIRE_AUTH from "./require_auth"
import HIGHER_FORMS from "./loader"



const ArrayofRoutes = [

		{path:"/secret", component:REQUIRE_AUTH(Secret)},
		{path:"/login", component:HIGHER_FORMS(Login)},
		{path:"/register", component:HIGHER_FORMS(Register)},
		{path:"/profile", component:REQUIRE_AUTH(Profile)},
		{path:"/", component:Home, exact:true}
]


export  {ArrayofRoutes};