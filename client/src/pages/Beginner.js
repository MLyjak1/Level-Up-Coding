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
					{beginners.map((video) => (
						<div key={video._id} className="{video.title}">
							<p>{video.title}</p>
							<embed src={video.videoLink}></embed>
							<p className="beginner-text-1">
								{video.description}
							</p>

							<Link
								className="btn btn-primary btn-block btn-squared"
								to={`/videos/${video._id}`}
							>
								See More
							</Link>
						</div>
					))}
				</div>
			</div>
			{/* <div>test</div> */}
		</div>
	);
};

export default Beginner;
