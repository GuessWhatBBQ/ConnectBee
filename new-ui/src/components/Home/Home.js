import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";

import Navbar from "../Navbar/Navbar";
import Leftbar from "../Leftbar/Leftbar";
import Feed from "../Feed/Feed";
import Rightbar from "../Rightbar/Rightbar";

import "./home.css";

const Home = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);
	return (
		<>
			<Navbar></Navbar>
			<div className="homeContainer">
				<Leftbar></Leftbar>
				<Feed currentId={currentId} setCurrentId={setCurrentId}></Feed>
				<Rightbar></Rightbar>
			</div>
		</>
	);
};

export default Home;
