import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";

import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

import "./home.css";

const Home = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);
	return (
		<>
			<div className="homeContainer">
				<Leftbar></Leftbar>
				<Feed currentId={currentId} setCurrentId={setCurrentId}></Feed>
				<Rightbar></Rightbar>
			</div>
		</>
	);
};

export default Home;