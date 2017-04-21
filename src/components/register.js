import React, {Component} from "react"
import PropTypes from 'prop-types';
import {Field, reduxForm } from "redux-form"
import {connect} from "react-redux"
import * as ACTIONS from "../actions/index"
import Errormessage from "./errorMessage"
import renderedField from "./renderedfield"
//reduxForm

class Register extends Component{

		render(){
		
			console.log(this.props.error_message)
				const { handleSubmit, submitted } = this.props;
				return (

					<form onSubmit={handleSubmit(this.props.handleFormSubmit.bind(this))}>
								{this.props.error_message ? <Errormessage  error_message={this.props.error_message} /> : null}
								<Field name="firstname" component={renderedField} type="text"  label="First Name" validate={[ACTIONS.UPDATE_NAME_ERROR]}/>
								<Field name="lastname" component={renderedField} type="text" label="Last Name" validate={[ACTIONS.UPDATE_NAME_ERROR]}/>
								<Field name="email" component={renderedField} type="email" label="Email" validate={[ACTIONS.UPDATE_EMAIL_ERROR]} />
								<Field name="password" component={renderedField} type="password"  label="Password" validate={[ACTIONS.UPDATE_PASSWORD_ERROR]}  />
								<Field name="confirmpassword" component={renderedField} type="password" label="Confirm Password"  validate={[ACTIONS.UPDATE_PASSWORD_ERROR]} />
								<button type="submit" disabled={submitted}>Submit</button>
						</form>


					)
		}
}


const mapDispatchToProps=(dispatch) =>({

	handleFormSubmit:(form)=>{dispatch(ACTIONS.REGISTER(form))}

})

const mapStateToProps =(state) =>({
	error_message:state.errorhandler.message,
	auth:state.AUTH.status
})
Register = connect(mapStateToProps, mapDispatchToProps)(Register)

Register = reduxForm({
	form:"register"
})(Register)


export default Register;