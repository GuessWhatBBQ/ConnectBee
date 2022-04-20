import React, { useState } from "react";
import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { generatePath, useNavigate, Link } from "react-router-dom";

import logo from "../images/logo.png";

const Navbar = () => {
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState({
		query: "",
	});
	const handleSubmit = (event) => {
		event.preventDefault();
		if (searchValue.query.length !== 0) {
			navigate(generatePath("/search/:query", { query: searchValue.query }));
		}
	};
	const handleChange = (event) => {
		setSearchValue((searchValue) => {
			return { ...searchValue, query: event.target.value };
		});
	};
	const logout = () => {
		localStorage.clear();
		navigate("/auth");
		console.log("logout is pressed");
	};

	let prof = JSON.parse(localStorage.getItem("profile"));
	let name = prof?.result?.name?.split(" ")[0];

	return (
		<div className="topBarContainer">
			<div className="topBarLeft">
				<Link to="/" style={{ color: "black", textDecoration: "none" }}>
					<img src={logo} alt="" className="topBarLogoIcon" />
					<span className="topBarLogoText">ConnectBee</span>
				</Link>
			</div>
			<div className="topBarCenter">
				<div className="topsearchbar">
					<Search className="searchIcon"></Search>
					<form onSubmit={handleSubmit}>
						<input
							placeholder="search for friends, places or profiles"
							className="searchInput"
							onChange={handleChange}
						/>
					</form>
				</div>
			</div>
			<div className="topBarRight">
				<div className="topBarIcons">
					<div className="topBarIconItem">
						<Link
							to="/friends/request"
							style={{ color: "black", textDecoration: "none" }}
						>
							<Person></Person>
							<span className="topBarIconItemBadge noselect">1</span>
						</Link>
					</div>
					<div className="topBarIconItem">
						<Link
							to="/messenger"
							style={{ color: "black", textDecoration: "none" }}
						>
							<Chat></Chat>
							{/* <span className="topBarIconItemBadge noselect">2</span> */}
						</Link>
					</div>
				</div>
				<div className="topBarUserandLogout">
					<Link
						className="topBarUserSection"
						to="/profile"
						style={{ color: "black", textDecoration: "none" }}
					>
						<span className="profileName">{name}</span>
						<img className="topBarImg" src="/img/profile/1.png" alt="" />
					</Link>
					{localStorage.getItem("profile") ? (
						<button onClick={logout} id="logoutButton">
							Logout
						</button>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
