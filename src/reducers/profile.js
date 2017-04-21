import * as TYPES from "../actions/types"
import * as ACTIONS from "../actions/profileactions"


var initialState = {
	profile:null,
	error:null
}




const PROFILEREDUCER = (state = initialState, action) =>{



		switch(action.type){
				case TYPES.UPDATE_PROFILE:
					console.log(action.payload)
					return Object.assign({}, state, {profile:action.payload})
					break;
				case TYPES.DISPLAY_PROFILE_ERROR:
					return Object.assign({}, state, {error:action.payload})
					break;
				default:
					return state;
		}

}




export default PROFILEREDUCER;