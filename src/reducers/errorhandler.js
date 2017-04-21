import * as ACTIONS from "../actions/index"
import * as TYPES from "../actions/types"



var initialState = {
		password:null,
		email:null,
		firstname:null,
		lastname:null,
		enableSubmit:false,
		message:null
}


//when all fields of an object is null, then the user can submit its data



const ERRORHANDLER = (state = initialState, action) =>{

			switch(action.type){


						case TYPES.PASSWORD_ERROR:
							return ACTIONS.UPDATE_PASSWORD_ERROR(state, action) //the payload would an object with two key: 1) login / register 2) a boolean
							break;
						case TYPES.EMAIL_ERROR:
							return  ACTIONS.UPDATE_EMAIL_ERROR(state,action)
							break;
						case TYPES.NAME_ERROR:
							return ACTIONS.UPDATE_NAME_ERROR(state, action) //payload is a bool
							break;
						case TYPES.ENABLESUBMIT_ERROR:
							return ACTIONS.UPDATE_ENABLESUBMIT_ERROR(state,action) //payload is a bool -> resets all field of a specific key
							break;
						case TYPES.SERVER_FORM_ERROR:
							 return ACTIONS.UPDATE_SERVER_FORM_ERROR(state, action) //payload is either a string or null
							 break;
						case TYPES.RESET_ERROR_FORM_FIELD:
							return Object.assign({}, state,{message:null});
						default:
							return state;
			}
}






export default ERRORHANDLER