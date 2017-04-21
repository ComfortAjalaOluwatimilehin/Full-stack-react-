import * as TYPES from "../actions/types"
import * as ACTIONS from "../actions/index"

const initialState = {
	processing:false
}

const FORMREDUCER = (state = initialState, action)=>{

				switch(action.type){


						case TYPES.PROCESSING:
							return ACTIONS.PROCESSING(state, action);
						default:
						return state;
				}
}



export default FORMREDUCER