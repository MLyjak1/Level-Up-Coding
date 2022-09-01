import React, { useState } from "react";
import Video from "../components/Video";

const ViewVideo = () => {

    const [video, setVideo] = useState('');
    
	return (
        <div>
            <h1>Hello video</h1>
            <Video />
        </div>

        
    );
};

export default ViewVideo;
