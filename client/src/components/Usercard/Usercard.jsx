import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import "./Usercard.css";

// import image from "./1.png";

const Usercard = ({ profilePic, name, mutualFriends }) => {
	return (
		<div className="usercardcontainer">
			<div className="userInfoContainer">
				<div className="userInfo">
					<img className="userInfoProfilePicture" src="./3.png" />
					<span className="userInfoProfileName">{name}</span>
				</div>
				<PersonAddIcon />
			</div>
		</div>
	);
};

export default Usercard;
