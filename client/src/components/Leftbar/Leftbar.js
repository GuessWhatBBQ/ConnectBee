import React from "react";
import { Link } from "react-router-dom";
import "./leftbar.css";
import {
	RssFeed,
	Chat,
	Person,
	StarRate,
	People,
	Groups,
} from "@mui/icons-material";

const Leftbar = () => {
	return (
		<div className="leftbar">
			<div className="leftbarWrapper">
				<ul className="leftbarList">
					<li className="leftbarListItem">
						<Link
							className="leftbarListItem"
							to="/"
							style={{ color: "black", textDecoration: "none" }}
						>
							<RssFeed className="leftbarListItemIcon"></RssFeed>
							<span className="leftbarListItemText">Feed</span>
						</Link>
					</li>
					<li>
						<Link
							className="leftbarListItem"
							to="/messenger"
							style={{ color: "black", textDecoration: "none" }}
						>
							<Chat className="leftbarListItemIcon"></Chat>
							<span className="leftbarListItemText">Chatting</span>
						</Link>
					</li>
					<li>
						<Link
							className="leftbarListItem"
							to="/profile"
							style={{ color: "black", textDecoration: "none" }}
						>
							<Person className="leftbarListItemIcon"></Person>
							<span className="leftbarListItemText">Profile</span>
						</Link>
					</li>
					<li className="leftbarListItem">
						<Link
							className="leftbarListItem"
							to="/friends"
							style={{ color: "black", textDecoration: "none" }}
						>
							<People className="leftbarListItemIcon"></People>
							<span className="leftbarListItemText">Friends</span>
						</Link>
					</li>
					<li className="leftbarListItem">
						<StarRate className="leftbarListItemIcon"></StarRate>
						<span className="leftbarListItemText">Favourites</span>
					</li>
					<li className="leftbarListItem">
						<Groups className="leftbarListItemIcon"></Groups>
						<span className="leftbarListItemText">Groups</span>
					</li>
				</ul>
				<button className="leftbarButton">Show More</button>
				<hr className="leftbarHr" />
				{/* <ul className="leftbarFriendList">
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
					<li className="leftbarFriend">
						<img
							src="./assets/person/7.jpeg"
							alt=""
							className="leftbarFriendImg"
						/>
						<span className="leftbarFriendname">Jane Doe</span>
					</li>
				</ul> */}
			</div>
		</div>
	);
};

export default Leftbar;
