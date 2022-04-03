import React from "react";
// import React, { useState, useEffect } from "react";
// import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
// import { useDispatch } from "react-redux";

// import logo from "./components/images/logo.png";
// import Form from "./components/Form/Form";
// import Posts from "./components/Posts/Posts";
// import { getPosts } from "./actions/posts";
// import useStyles from "./styles";

//arafat
import Home from "../src/components/Home/Home";

function App() {
	// const [currentId, setCurrentId] = useState(null);
	// const classes = useStyles();
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getPosts());
	// }, [dispatch]);

	// return (
	// 	<>
	// 		<Form currentId={currentId} setCurrentId={setCurrentId} />
	// 		<Posts setCurrentId={setCurrentId} />
	// 	</>
	// );
	return <Home></Home>;
}

export default App;
