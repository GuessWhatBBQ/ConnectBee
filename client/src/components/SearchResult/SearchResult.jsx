import React from "react";
import { useSelector } from "react-redux";
import "./SearchResult.css";
import Usercard from "../Usercard/Usercard";

const SearchResult = () => {
	const userSearchResult = useSelector((state) => state.search);
	const mutualFriends = [
		{ key: 1, profilePic: "./img/profile/1.png", name: "user1" },
		{ key: 2, profilePic: "./img/profile/2.png", name: "user2" },
		{ key: 3, profilePic: "./img/profile/3.png", name: "user3" },
		{ key: 4, profilePic: "./img/profile/4.png", name: "user4" },
	];
	return (
		<div className="search-result">
			{userSearchResult.map((user) => {
				return (
					<div>
						<Usercard
							key={user._id}
              userId={user._id}
							profilePic={user.profilePic}
							name={user.name}
							mutualFriends={mutualFriends}
              sent={user.sent}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default SearchResult;
