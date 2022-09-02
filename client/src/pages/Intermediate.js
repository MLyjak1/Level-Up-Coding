import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_VIDEOS } from "../utils/queries";
import Auth from "../utils/auth";

const Intermediate = () => {
	const { loading, data } = useQuery(QUERY_VIDEOS, {
		// pass URL parameter
		variables: { courseLevel: "intermediate" },
	});

	const intermediate = data?.videos || {};
	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="box">
			<div className="panel">
				<div className="intermediate-page">
					<h1 className="vid-headings"> Intermediate Videos</h1>
					{intermediate.map((video) => (
						<div key={video._id} className="{video.title}">
							<embed
								src={video.videoLink}
								className="video-content"
							></embed>
							<p className="text-1">{video.description}</p>
							{Auth.loggedIn() ? (
								<>
									<Link
										className="btn"
										to={`/videos/${video._id}`}
									>
										View and Comment
									</Link>
								</>
							) : (
								<>
									<Link className="btn" to={`/login`}>
										Login to Comment
									</Link>
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Intermediate;
