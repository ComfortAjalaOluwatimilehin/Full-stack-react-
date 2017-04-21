import React, {Component} from "react"
import PropTypes from 'prop-types';
import {Field, reduxForm } from "redux-form"
import {connect} from "react-redux"
import * as ACTIONS from "../actions/index"
import Errormessage from "./errorMessage"
import renderedField from "./renderedfield"
//reduxForm



class Login extends Component{

		render(){
				console.log(this.props.error_message)
				const { handleSubmit, submitting } = this.props;
				return (

					<form onSubmit={handleSubmit(this.props.handleFormSubmit.bind(this))}>
							<Errormessage  error_message={this.props.error_message} />
								<Field name="email" component={renderedField} type="email" validate={[ACTIONS.UPDATE_EMAIL_ERROR]} label="Email"/>
								<Field name="password" component={renderedField}  type="password"  validate={[ACTIONS.UPDATE_PASSWORD_ERROR]}  label="Password"/>
							<button type="submit" disabled={submitting}>Submit</button>
						</form>


					)
		}
}


const mapDispatchToProps=(dispatch) =>({

	handleFormSubmit:(form)=>{dispatch(ACTIONS.LOGIN(form))}

})

const mapStateToProps =(state) =>({
	error_message:state.errorhandler.message,
	auth:state.AUTH.status
})


Login = connect(mapStateToProps, mapDispatchToProps)(Login)

Login = reduxForm({
	form:"login"
})(Login)


export default Login;