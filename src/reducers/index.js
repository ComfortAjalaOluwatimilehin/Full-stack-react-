import {combineReducers} from "redux"
import AUTHENTICATIONREDUCER from "./authentication"
import form from "./form"
import {reducer as reducerForm} from "redux-form"
import errorhandler from "./errorhandler"
import profilereducer  from "./profile"
const REDUCERS = combineReducers({

		AUTH:AUTHENTICATIONREDUCER,
		form:reducerForm,
		formreducer:form,
		errorhandler,
		profile:profilereducer
})


export default REDUCERS