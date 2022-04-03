import React from "react";
import "./feed.css";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";

export default function Feed({ currentId, setCurrentId }) {
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Form currentId={currentId} setCurrentId={setCurrentId} />
				<Posts setCurrentId={setCurrentId} />
			</div>
		</div>
	);
}
