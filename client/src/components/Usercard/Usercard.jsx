import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import "./Usercard.css";

const Usercard = ({ profilePic, name, mutualFriends }) => {
	return (
		<div className="usercard">
			<div className="userInfo">
				<img
					className="userInfoProfilePicture"
					src={mutualFriends[0].profilePic}
				/>
				<span className="userInfoProfileName">{name}</span>
			</div>
			<PersonAddIcon />
		</div>
	);
};

export default Usercard;
