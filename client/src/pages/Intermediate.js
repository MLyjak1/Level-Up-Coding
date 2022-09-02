import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_VIDEOS } from "../utils/queries";

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
		<div className="box h-screen">
			<div className="panel">
				<div className="intermediate-page">
					{intermediate.map((video) => (
						<div key={video._id} className="{video.title}">
							<embed src={video.videoLink}></embed>
							<p className="intermediate-text-1">
								{video.description}
							</p>

							<Link
								className="btn btn-primary btn-block btn-squared"
								to={`/videos/${video._id}`}
							>
								{" "}
								See More
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Intermediate;
