import React from "react";
import { useSelector } from "react-redux";

import FeedContent from "../FeedContent/FeedContent";

function Posts({ setCurrentId }) {
	const posts = useSelector((state) => state.posts);
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
