import React from "react";
// import Video from "../components/Video";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_VIDEO } from '../utils/queries';
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

const ViewVideo = () => {
    const { videoId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_VIDEO, {
        // pass URL parameter
        variables: { videoId: videoId },
      });

    const video = data?.video || {};
    console.log(data)
    console.log(video);
    if (loading) {
        return <div>Loading...</div>;
    }
	return (
        <div>
            <div>id: {video._id}</div>
            <embed src={video.videoLink}></embed>
            {/* <div>{video.description}</div> */}

            <div class="max-w-sm w-full lg:max-w-full lg:flex">
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">{video.title}</div>
                <p class="text-gray-700 text-base">{video.description}</p>
                </div>
                <div class="flex items-center">
                {/* <div class="text-sm">
                    <p class="text-gray-900 leading-none">{video.authorLink}</p>
                    <p class="text-gray-600">Aug 18</p>
                </div> */}
                </div>
            </div>
            </div>







            {/* <Video /> */}
            {/* <CommentForm videoId={video._id} /> */}
            <div className="my-5">
                <CommentList comments={video.comments} />
            </div>
            <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                <CommentForm videoId={video._id} />
            </div>










        </div>

    );
};

export default ViewVideo;
