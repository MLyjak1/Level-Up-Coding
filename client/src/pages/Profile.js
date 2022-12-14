import React from "react";
import { useQuery } from "@apollo/client";

import { useMutation } from "@apollo/client";
import { QUERY_COMMENTS, QUERY_USER_COMMENTS } from "../utils/queries";
import { REMOVE_COMMENT } from "../utils/mutations";
import Auth from "../utils/auth";
import EditCommentModal from "../components/EditCommentModal";

const Profile = () => {
	const [removeComment, { error }] = useMutation(REMOVE_COMMENT, {
		update(cache, { data: { removeComment } }) {
			try {
				cache.writeQuery({
					query: QUERY_COMMENTS,
					data: { removeComment },
				});
			} catch (e) {
				console.error(e);
			}
		},
	});

	const handleDeleteComment = async (videoId, commentId) => {
		try {
			const { data } = await removeComment({
				variables: { videoId, commentId },
			});
		} catch (err) {
			console.error(err);
		}
	};

	const { loading, data } = useQuery(QUERY_USER_COMMENTS, {
		// pass URL parameter
		variables: { username: Auth.getProfile().data.username },
	});

	// Taking data from video schema
	const videos = data?.userComments || {};
	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="box">
			<div className="panel">
				<div className="beginner-page">
					{videos.map((video) => (
						<div key={video._id}>
							{video.comments.map((comment) => (
								<div key={comment._id}>
									{/* TODO: Style profile comments */}
									<div>{video.title}</div>
									<br />
									<div>{comment.commentText}</div>
									<EditCommentModal videoId={video._id} commentId={comment._id} defaultCommentText={comment.commentText} />
									<br />
									<button
										onClick={() =>
											handleDeleteComment(
												video._id,
												comment._id
											)
										}
									>
										Delete
									</button>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Profile;
