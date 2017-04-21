import React, {Component} from "react"
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import createImage from "./image"
import * as ACTIONS from "../actions/index"



const HIGHER_FORMS = (ComposedComponent) =>{


		class LOADER extends Component{

				componentWillMount(){
					//reset the error field of the error handler state 
					this.props.resetErrorField();
				}

				displayContent(){
					//check if the server is processing somethign 
					//else display the given component
					if(!this.props.processing)
							return <ComposedComponent {...this.props} />
					return createImage("loader.gif")
				}

				componentWillUpdate(newProps){

						if(newProps.auth)
							this.context.router.history.push("/secret")
						return newProps

				} 
				render(){


						return (

								<div>{this.displayContent()}</div>
							)
				}
		}



		LOADER.contextTypes = {
			router:PropTypes.object.isRequired
		}
		const mapStateToProps = (state) =>({
			processing:state.formreducer.processing,
			auth:state.AUTH.status
		})

		const mapDispatchToProps = (dispatch)=>({
				resetErrorField:()=>{
					dispatch(ACTIONS.RESET_ERROR_FORM_FIELD())
				}
		})



		return connect(mapStateToProps, mapDispatchToProps)(LOADER)
}


export default HIGHER_FORMS;