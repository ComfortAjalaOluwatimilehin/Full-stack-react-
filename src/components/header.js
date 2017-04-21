import React, {Component} from "react"
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import * as ACTIONS from "../actions/index"

class Header extends Component{

			getButton(){
					if(this.props.auth)
							return <button onClick={()=>this.props.unauthenticate()}>Sign Out </button>
					return <button onClick={()=>this.props.authenticate()}>Login In </button>
			}
		
			render(){
						return (
								<nav>
										<ul>
											<li><Link to="/">Home</Link></li>
											<li><Link to="/secret">Secret</Link></li>
											<li><Link to="/profile">Profile</Link></li>
											{!this.props.auth ? <li><Link to="/login">Login</Link></li> : null}
											{!this.props.auth ? <li><Link to="/register">Register</Link></li> : null}
											{this.getButton()}
										</ul>
								</nav>
							)
			}
}




const mapStateToProps = (state)=>({auth:state.AUTH.status})

const mapDispatchToProps = (dispatch) =>({
		unauthenticate:()=>{dispatch(ACTIONS.UNAUTHENTICATE_USER())},
		authenticate:()=>{dispatch(ACTIONS.AUTHENTICATE_USER())}
})
Header.PropTypes = {
	auth:PropTypes.bool.isRequired,
	authenticate:PropTypes.func.isRequired,
	unauthenticate:PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)