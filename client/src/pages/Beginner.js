import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_VIDEOS } from "../utils/queries";

const Beginner = () => {
	const { loading, data } = useQuery(QUERY_VIDEOS, {
		// pass URL parameter
		variables: { courseLevel: "beginner" },
	});

	const beginners = data?.videos || {};
	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="box">
			<div className="panel">
				<div className="beginner-page">
				<h1 className="vid-headings"> Beginner Videos</h1>
					{beginners.map((video) => (
						<div key={video._id} className="{video.title}">
							<embed src={video.videoLink}  className="video-content"></embed>
							<p className="text-1">
								{video.description}
							</p>

							<Link
								className="btn"
								to={`/videos/${video._id}`}
							>
								View and Comment
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Beginner;
