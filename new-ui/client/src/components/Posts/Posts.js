import React from "react";
import { useSelector } from "react-redux";
// import { Grid, CircularProgress } from "@material-ui/core";
// import Post from "./Post/Post";

// import useStyles from "./styles";

import FeedContent from "../FeedContent/FeedContent";

function Posts({ setCurrentId }) {
	const posts = useSelector((state) => state.posts);
	// const classes = useStyles();

	// return !posts.length ? (
	// 	<CircularProgress />
	// ) : (
	// 	<Grid
	// 		className={classes.container}
	// 		container
	// 		alignItems="stretch"
	// 		spacing={3}
	// 	>
	// 		{posts.map((post) => (
	// 			<Grid key={post._id} item xs={12} sm={6}>
	// 				<Post post={post} setCurrentId={setCurrentId} />
	// 			</Grid>
	// 		))}
	// 	</Grid>
	// );
	return (
		<>
			{posts.map((post) => (
				<FeedContent
					key={post._id}
					post={post}
					setCurrentId={setCurrentId}
				></FeedContent>
			))}
		</>
	);
}

export default Posts;
<h1>POSTS</h1>;
