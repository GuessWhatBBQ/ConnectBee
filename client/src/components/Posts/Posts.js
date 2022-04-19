import React from "react";
import { useSelector } from "react-redux";

import PostContent from "../PostContent/PostContent";

function Posts({ setCurrentId }) {
	const posts = useSelector((state) => state.posts);
	return (
		<>
			{posts.map((post) => (
				<PostContent
					key={post._id}
					post={post}
					setCurrentId={setCurrentId}
				></PostContent>
			))}
		</>
	);
}

export default Posts;
<h1>POSTS</h1>;
