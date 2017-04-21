import * as TYPES from "./types"
import axios from "axios"

//action creators 


//check localStorage

const checkLocal = () =>{

	return window.localStorage.getItem("token") ?  true : false;

}

exports.ISPROCESSING = (isprocessing) =>({type:TYPES.PROCESSING, payload:isprocessing})

exports.PROCESSING = (state, action) => (Object.assign({}, state, {processing:action.payload}))

exports.CREATE_AUTH_ACTION = ()=>( {type:TYPES.AUTH,payload:checkLocal()})


exports.AUTHENTICATE_USER = () =>(exports.CREATE_AUTH_ACTION())


exports.UNAUTHENTICATE_USER =()=>{var isAUTH = window.localStorage.removeItem("token");return exports.CREATE_AUTH_ACTION()}



exports.AUTH = (state, action)=>{
//responds to change in the authentication status of the user;updates state;testing		
			return Object.assign({}, state, {status:action.payload})
}


exports.LOGIN =(form)=>{

		//console.log(form)
	return function(dispatch){
				//sends the data  to the backend; gets the token
					dispatch(exports.ISPROCESSING(true))
					return axios.post("/login", Object.assign({}, form))
					.then((response)=>{
							console.log(response)
							if(response.data.error){

										//update the auth and the error auth 
										dispatch(exports.UNAUTHENTICATE_USER())
										dispatch(exports.HANDLE_ERROR_AUTHENTICATION(response.data.error))
								
							}
							else{

										//dispatches AUTHENTICATE_USER - if token exists
										//save the toke n in local storage 
										window.localStorage.setItem("token", response.data.token)
										dispatch(exports.AUTHENTICATE_USER())
										dispatch(exports.HANDLE_ERROR_AUTHENTICATION(null))


							}

						return dispatch(exports.ISPROCESSING(false))

							
					})
					



	}

}

exports.REGISTER =(form)=>{

	//sends the data  to the backend; gets the token
	//dispatches AUTHENTICATE_USER - if token exists
	//else
		//updates the ERROR_AUTH ACTION




		return (dispatch)=>{

			//before sending details: validate user input and update the errorhandler state 


				if(form.password !== form.confirmpassword)
						return dispatch(exports.HANDLE_ERROR_AUTHENTICATION("Both Passwords do not Match!"))
							


				else{
					

					axios.post("/register", Object.assign({}, form))
					.then(response=>{
							if(response.data.error){
									dispatch(exports.UNAUTHENTICATE_USER())
									dispatch(exports.HANDLE_ERROR_AUTHENTICATION(response.data.error))
							}else{
									window.localStorage.setItem("token", response.data.token)
									dispatch(exports.AUTHENTICATE_USER())
									dispatch(exports.HANDLE_ERROR_AUTHENTICATION(null))
							}
					})
				}
		}

}




exports.HANDLE_ERROR_AUTHENTICATION = (error) =>{
		return {
			type:TYPES.SERVER_FORM_ERROR,
			payload:error
		}
}



//ERROR HANDLING 

exports.isExist = value => value && value.length > 0


exports.UPDATE_PASSWORD_ERROR = (password) =>{
		if(!exports.isExist(password))return
	return password.length > 8 ? undefined : "Password must have 8 or more characters"
}
exports.UPDATE_EMAIL_ERROR = (email) =>{
	if(!exports.isExist(email))return
	return (typeof email) == "string" && email.length > 0 ?  undefined : "Email is Invalid"}

exports.UPDATE_NAME_ERROR = (name) =>{

if(!exports.isExist(name))return
	return (typeof name) == "string" && name.length > 0 ?  undefined : "Name is Invalid"}


exports.UPDATE_ENABLESUBMIT_ERROR = (state,action) =>{}

exports.RESET_ERROR_FORM_FIELD = ()=>({type:TYPES.RESET_ERROR_FORM_FIELD})









exports.UPDATE_SERVER_FORM_ERROR = (state,action) =>{//upates the state's error auth using the action payload//returns new state
		return Object.assign({}, state, {message:action.payload})}


exports.print =(form)=>{console.log(form)}