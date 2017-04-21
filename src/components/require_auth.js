import React, {Component} from "react"
import PropTypes from 'prop-types';
import {connect} from "react-redux"




const REQUIRE_AUTH = (ComposedComponent) =>{


		class Authentication extends Component{


						componentWillMount(){
								

								if(!this.props.auth)
									return this.context.router.history.push("/")
						}	

						componentWillUpdate(newProps){
								if(!newProps.auth)
									return this.context.router.history.push("/")
								return newProps
						}

						renderElement(){
								if(this.props.auth)
									return <ComposedComponent {...this.props}  />
								return "You are not allowed to view this Page"
						}

						render(){
						
									return <main>{this.renderElement()}</main>
						}
		}

		//define Context Types 

		Authentication.contextTypes = {router:PropTypes.object.isRequired}
		const mapStateToProps = (state)=>({auth:state.AUTH.status})




		return connect(mapStateToProps)(Authentication)
}



export default REQUIRE_AUTH