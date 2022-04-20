import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import "./Usercard.css";
import { useDispatch } from "react-redux";
import { sendFriendRequest } from "../../actions/request";

// import image from "./1.png";

const Usercard = ({ userId, profilePic, name, mutualFriends, sent }) => {
  const dispatch = useDispatch();
  const handleSendRequest = () => {
    dispatch(sendFriendRequest(userId));
  };
	return (
		<div className="usercardcontainer">
			<div className="userInfoContainer">
				<div className="userInfo">
					<img className="userInfoProfilePicture" src={profilePic} />
					<span className="userInfoProfileName">{name}</span>
				</div>
        {typeof sent === 'undefined' ? <PersonAddIcon onClick={handleSendRequest} /> : <CheckCircleIcon style={{ fill: "#0d8022" }}/>}
			</div>
		</div>
	);
};

export default Usercard;
