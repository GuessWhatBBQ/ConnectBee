import React, { useState } from "react";
import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { generatePath, useNavigate, Link } from "react-router-dom";

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
	const [profileName, setprofileName] = useState("");

	const fetchProfileName = () => {
		let prof = JSON.parse(localStorage.getItem("profile"));
		let name = prof.result.name;
		const results = name.split(" ");
		setprofileName(results[0]);
	};

	return (
		<div className="topBarContainer">
			<div className="topBarLeft">
				<Link to="/" style={{ color: "black", textDecoration: "none" }}>
					<img src="./assets/logo.png" alt="" className="topBarLogoIcon" />
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
						<Person></Person>
						<span className="topBarIconItemBadge noselect">1</span>
					</div>
					<div className="topBarIconItem">
						<Link
							to="/messenger"
							style={{ color: "black", textDecoration: "none" }}
						>
							<Chat></Chat>
							<span className="topBarIconItemBadge noselect">2</span>
						</Link>
					</div>
				</div>
				<div className="topBarUserandLogout">
					<Link
						className="topBarUserSection"
						to="/profile"
						style={{ color: "black", textDecoration: "none" }}
					>
						<span className="profileName">${profileName}</span>
						<img className="topBarImg" src="assets/person/1.jpeg" alt="" />
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
