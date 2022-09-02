import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_VIDEOS } from "../utils/queries";

const Advanced = () => {
	const { loading, data } = useQuery(QUERY_VIDEOS, {
		// pass URL parameter
		variables: { courseLevel: "advanced" },
	});

	const advanced = data?.videos || {};
	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="box">
			<div className="panel">
				<div className="advanced-page">
				<h1 className="vid-headings"> Advanced Videos</h1>
					{advanced.map((video) => (
						<div key={video._id} className="{video.title}">
							<embed src={video.videoLink} className="video-content1"></embed>
							<p className="text-1">
								{video.description}
							</p>

							<Link
								className="btn1"
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

export default Advanced;
