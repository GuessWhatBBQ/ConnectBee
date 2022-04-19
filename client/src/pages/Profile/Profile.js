import React from "react";
import "./profile.css";

import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

export const Profile = () => {
	return (
		<>
			<div className="profileContainer">
				<Leftbar></Leftbar>
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img src=".2.jpeg" alt="" className="profileCoverImg" />
							<img src="./1.jpeg" alt="" className="profileUserImg" />
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">My name is Arafat</h4>
							<p className="profileInfoDesc">This is description</p>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed></Feed>
						<Rightbar></Rightbar>
					</div>
				</div>
			</div>
		</>
	);
};
export default Profile;
