import React from "react";
// import Video from "../components/Video";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_VIDEO } from "../utils/queries";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

const ViewVideo = () => {
	const { videoId } = useParams();
	const { loading, data } = useQuery(QUERY_SINGLE_VIDEO, {
		// pass URL parameter
		variables: { videoId: videoId },
	});

	const video = data?.video || {};
	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<main className="viewVideo">
			<div className="flex justify-center">
				<embed className="" src={video.videoLink}></embed>
			</div>
			<div className="max-w-sm w-full lg:max-w-full lg:flex">
				<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
					<div className="mb-8">
						<div className="font-bold text-xl mb-2">
							{video.title}
						</div>
						<p className="text-base">
							{video.description}
						</p>
					</div>
					<div className="flex items-center"></div>
				</div>
			</div>

			<div className="my-5">
				<CommentList comments={video.comments} />
			</div>
			<div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
				<CommentForm videoId={video._id} />
			</div>
		</main>
	);
};

export default ViewVideo;
