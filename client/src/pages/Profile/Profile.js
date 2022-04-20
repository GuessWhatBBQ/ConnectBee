import React from "react";
import { useSelector } from "react-redux";
import "./profile.css";

import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

export const Profile = () => {
	const userSearchResult = useSelector((state) => state.search);
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
						{userSearchResult.map((user) => {
							return user.id == Profile.id ? null : <button>Message</button>;
						})}
					</div>
				</div>
			</div>
		</>
	);
};
export default Profile;
