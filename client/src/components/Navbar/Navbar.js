import React, { useState } from "react";
import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { generatePath, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState({
    query: ""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.query.length !== 0) {
      navigate(generatePath('/search/:query', { query: searchValue.query }));
    }
  };
  const handleChange = (event) => {
    setSearchValue((searchValue) => {
      return {...searchValue, query: event.target.value};
    });
  }

	return (
		<div className="topBarContainer">
			<div className="topBarLeft">
				<img src="./assets/logo.png" alt="" className="topBarLogoIcon" />
				<span className="topBarLogoText">ConnectBee</span>
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
