import React, { useState } from "react";
import "./postContent.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import moment from "moment";

import { deletePost, likePost } from "../../actions/posts";
import { useDispatch } from "react-redux";

export default function FeedContent({ content, post, setCurrentId }) {
	function hideModal(id) {
		document.getElementById(`${id}`).classList.hide("modalAcitve");
	}

	function toggleModal(id) {
		document.getElementById(id).classList.toggle("modalAcitve");
		setTimeout(hideModal(id), 1000);
		// clearTimeout(myTimeout);
	}

	const dispatch = useDispatch();
	return (
		<div className="content">
			<div className="contentWrapper">
				<div className="contentTop">
					<div className="contentTopLeft">
						{/* <img
							className="contentProfileImg"
							src={
								Users.filter((user) => user.id === content.userId)[0]
									.profilePicture
							}
							alt=""
						/> */}
						<span className="postTime">Posted {moment(post.createdAt).fromNow()}</span>
					</div>
					<div className="contentTopRight">
						<MoreHorizIcon
							onClick={() => toggleModal(post._id)}
						></MoreHorizIcon>
						<div id={post._id} className="modal">
							<div className="modal-row">
								Edit
								<EditIcon
									onClick={() => {
										setCurrentId(post._id);
									}}
								/>
							</div>
							<div className="modal-row">
								Delete
								<DeleteIcon
									onClick={() => {
										dispatch(deletePost(post._id));
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="contentCenter">
					<span className="contentText">{post.caption}</span>
					<img className="contentImg" src={post.selectedFile} alt="" />
				</div>
				<div className="contentBottom">
					<div className="contentBottomLeft">
            <ThumbUpIcon
              className="likeIcon"
              onClick={() => {
                dispatch(likePost(post._id));
              }}
            />
						<span className="contentLikeCounter">
							{post.likeCount} people like it
						</span>
					</div>
					<div className="contentBottomRight">
						<span className="contentCommentText">$number comments</span>
					</div>
				</div>
			</div>
		</div>
	);
}
