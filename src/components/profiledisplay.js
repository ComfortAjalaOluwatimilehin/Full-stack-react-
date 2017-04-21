import React, {Component} from "react"





const ProfileDisplay = ({name, email}) =>{
		return (

					<div>
						<h3>Hello ! {name} </h3>
						<address>{email}</address>
					</div>



			)
}


export default ProfileDisplay