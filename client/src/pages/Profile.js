import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER_COMMENTS } from '../utils/queries';
import Auth from "../utils/auth";

const Profile = () => {

    const { loading, data } = useQuery(QUERY_USER_COMMENTS, {
        // pass URL parameter
        variables: { username: Auth.getProfile().data.username },
      });

	// Taking data from video schema
    const videos = data?.userComments || {};

	console.log(videos)
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
									<div>{video.title}</div>
									<br />
									<div>{comment.commentText}</div>
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
