import React from "react";
import Video from "../components/Video";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_VIDEO } from '../utils/queries';

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
        <div>
            <h1>Hello video</h1>
            <div>id: {video._id}</div>
            <div>{video.description}</div>
            <div>{video.videoLink}</div>
            <Video />
        </div>
    );
};

export default ViewVideo;
