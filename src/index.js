import React, {Component} from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import {  BrowserRouter as Router} from "react-router-dom"
import App from "./components/app"
import REDUCERS from "./reducers/index"
import thunk from "redux-thunk"
import * as ACTIONS from "./actions/index"



var store = createStore(REDUCERS, window.preloadedstate, applyMiddleware(thunk))

//update store  auth status 

store.dispatch(ACTIONS.CREATE_AUTH_ACTION());


render(<Provider store={store}><Router><App /></Router></Provider>,document.getElementById("app"))


delete "preloadedstate" in window