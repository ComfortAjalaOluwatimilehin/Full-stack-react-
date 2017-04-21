import React, {Component} from "react"
import {connect} from "react-redux"


const ERRORMESSAGE = ({error_message, redirectURL}) =>{
		return (

				<aside>
						<p className="error_message">{error_message} </p>
							{redirectURL ? <a href={redirectURL}> Go to...</a>:null}
				</aside>

			)



}



export default ERRORMESSAGE