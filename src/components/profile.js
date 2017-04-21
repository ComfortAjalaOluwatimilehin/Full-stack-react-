import React, {Component} from "react"
import {connect} from "react-redux"
import ERRORMESSAGE from "./errorMessage"
import ProfileDisplay from "./profiledisplay"
import * as ACTIONS from "../actions/profileactions"




class Profile extends Component{

			componentWillMount(){

					//get's the profile updated before rendering
						//if the profile is undefined 
							//display the rror message 
							//give user the buttons to login or sign u
							console.log(this.props.profile)
							this.props.getprofile()
			}
			displayContent(){

					if(this.props.profile)
						return <ProfileDisplay {...this.props.profile} />
					return <ERRORMESSAGE error_message={"YOUR PROFILE DOES NOT EXIST"} redirectURL={"/register"} />
			}
			render(){

				return <section>{this.displayContent()}</section>
					
			}
}




const mapStateToProps = (state) =>state.profile

const mapDispatchToProps =(dispatch) =>({
	getprofile:()=>{
			dispatch(ACTIONS.GET_PROFILE(ACTIONS.EXTRACT_TOKEN()))
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Profile)