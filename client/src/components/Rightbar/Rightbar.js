import React from "react";
import "./rightbar.css";

import { Users } from "../dummydata";

const Rightbar = () => {
	return (
		<>
			<div className="rightbar">
				<div className="rightbarWrapper">
					<h4 className="rightbarTitle">Online Friends</h4>
					<ul className="rightbarFriendList">
						{Users.map((user) => (
							<li className="rightbarFriend">
								<div className="rightbarProfileImgContainer">
									<img
										className="rightbarProfileImg"
										src={user.profilePicture}
										alt=""
									/>
									<span className="rightbarOnline"></span>
								</div>
								<span className="rightbarUsername">{user.username}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Rightbar;
