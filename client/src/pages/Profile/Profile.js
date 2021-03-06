import React, { useEffect } from "react";
import "./profile.css";

import { useDispatch, useSelector } from "react-redux";

import { getUserPosts } from "../../actions/posts";

import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import { useParams } from "react-router-dom";
import { createConversation } from "../../api";

export const Profile = () => {
	const dispatch = useDispatch();
	const { userId } = useParams();
	const profile = useSelector((state) => state.auth);
	useEffect(() => {
		if (userId) {
			dispatch(getUserPosts(userId));
		} else if (profile) {
			dispatch(getUserPosts(profile.authData.result._id));
		}
	}, [dispatch, profile, userId]);
	const handleConversationCreation = () => {
		createConversation(userId);
	};
	return (
		<>
			<div className="profileContainer">
				<Leftbar></Leftbar>
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								src="/img/profile/ad.png"
								alt=""
								className="profileCoverImg"
							/>
							<img src="/img/profile/1.png" alt="" className="profileUserImg" />
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">Sazid</h4>
							<p className="profileInfoDesc">This is my bio</p>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed></Feed>
						{userId ? (
							<button onClick={handleConversationCreation}>Message</button>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
};
export default Profile;
