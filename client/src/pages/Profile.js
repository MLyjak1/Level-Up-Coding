import React from "react";
import { useQuery } from "@apollo/client";

import { useMutation } from "@apollo/client";
import { QUERY_COMMENTS, QUERY_USER_COMMENTS } from "../utils/queries";
import { REMOVE_COMMENT } from "../utils/mutations";
import editIcon from "../assets/images/pencil-svgrepo-com.svg";
import Auth from "../utils/auth";

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
			console.log("delete:");
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

	console.log(videos);
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
									{/* <img src={editIcon} alt="pencil edit icon" />
									 */}
									<button>Edit</button>
									<br />
									<button
										onClick={() => handleDeleteComment(
											video._id,
											comment._id
										)}
									>
										Delete
									</button>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
			{/* <div>test</div> */}
		</div>
	);
};

export default Profile;
