import React from "react";
import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const Navbar = () => {
	return (
		<div className="topBarContainer">
			<div className="topBarLeft">
				<img src="./assets/logo.png" alt="" className="topBarLogoIcon" />
				<span className="topBarLogoText">ConnectBee</span>
			</div>
			<div className="topBarCenter">
				<div className="topsearchbar">
					<Search className="searchIcon"></Search>
					<input
						placeholder="search for friends, places or profiles"
						className="searchInput"
					/>
				</div>
			</div>
			<div className="topBarRight">
				<div className="topBarLinks">
					<span className="topBarLink">Home</span>
					<span className="topBarLink">Timeline</span>
				</div>
				<div className="topBarIcons">
					<div className="topBarIconItem">
						<Person></Person>
						<span className="topBarIconItemBadge noselect">1</span>
					</div>
					<div className="topBarIconItem">
						<Chat></Chat>
						<span className="topBarIconItemBadge noselect">2</span>
					</div>
					<div className="topBarIconItem">
						<Notifications></Notifications>
						<span className="topBarIconItemBadge noselect">1</span>
					</div>
				</div>
				<div className="topBarUserSection">
					<span className="profileName">Arafat</span>
					<img className="topBarImg" src="assets/person/1.jpeg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
