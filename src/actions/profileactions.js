import * as TYPES from "./types"
import axios from "axios"

exports.EXTRACT_TOKEN = ()=> window.localStorage.getItem("token")


exports.GET_PROFILE = (token) =>{
	//check if the token is provided
			return (dispatch) =>{
					axios.defaults.headers.common['Authorization'] = token
					axios.get("/auth/profile")
					.then(response=>{
						
							if(response.data.error){
									dispatch(exports.DISPLAY_PROFILE_ERROR(response.data.error))
							}

								dispatch({type:TYPES.UPDATE_PROFILE, payload:response.data.user})
								dispatch(exports.DISPLAY_PROFILE_ERROR(null))
					})
			}
 


}



exports.DISPLAY_PROFILE_ERROR = (error) =>({
		type:TYPES.DISPLAY_PROFILE_ERROR,
		payload:error
})	