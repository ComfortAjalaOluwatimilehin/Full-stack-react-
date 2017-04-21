import * as TYPES from "../actions/types"
import * as ACTIONS from "../actions/index"

const initialState = {
	status:false
}


const AUTHENTICATIONREDUCER = (state = initialState, action)=>{

				switch(action.type){


						case TYPES.AUTHENTICATE_USER:
									return ACTIONS.AUTHENTICATE_USER();
						break;

						case TYPES.LOGIN:
									return ACTIONS.LOGIN(action);
						break;

						case TYPES.REGISTER:
									return ACTIONS.REGISTER(action);
						break;


						case TYPES.UNAUTHENTICATE_USER:
									return ACTIONS.UNAUTHENTICATE_USER();
						break;

						case TYPES.AUTH:
									return ACTIONS.AUTH(state, action);
						break;

						default:
						return state;
				}
}



export default AUTHENTICATIONREDUCER;