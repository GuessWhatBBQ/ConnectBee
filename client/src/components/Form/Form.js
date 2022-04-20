import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import "./form.css";
import { createPosts, updatePost } from "../../actions/posts";

import { AddToPhotos, VideoLibrary, EmojiEmotions } from "@mui/icons-material";

function Form({ currentId, setCurrentId }) {
	const post = useSelector((state) =>
		currentId ? state.posts.find((p) => p._id === currentId) : null
	);
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		caption: "",
		tags: "",
		selectedFile: "",
	});
	const dispatch = useDispatch();

	useEffect(() => {
		if (post) setPostData(post);
	}, [post]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentId) {
			dispatch(updatePost(currentId, postData));
		} else {
			dispatch(createPosts(postData));
		}
		clear();
	};
	const clear = () => {
		setCurrentId(null);
		setPostData({
			creator: "",
			title: "",
			caption: "",
			tags: "",
			selectedFile: "",
		});
	};
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
					<input
						value={postData.caption}
						placeholder="What's on your mind?"
						className="postInput"
						onChange={(e) =>
							setPostData({ ...postData, caption: e.target.value })
						}
					/>
				</div>
				<hr className="postHr"></hr>
				<div className="postBottom">
					<div className="postOptions">
						<div className="postOption">
							<AddToPhotos htmlColor="tomato" className="postIcon" />
							<span className="postOptionText">
								Add Photo
								<FileBase
									_id="filebase"
									type="file"
									multiple={false}
									onDone={({ base64 }) =>
										setPostData({ ...postData, selectedFile: base64 })
									}
								/>
							</span>
						</div>
						<div className="postOption">
							<VideoLibrary htmlColor="salmon" className="postIcon" />
							<span className="postOptionText">Add Video</span>
						</div>
					</div>
					<button type="submit" onClick={handleSubmit} className="shareButton">
						Post
					</button>
				</div>
			</div>
		</div>
	);
}

export default Form;
