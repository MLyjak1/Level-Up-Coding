import React from "react";
import videos from "../utils/videoSeeds.json";

const Advanced = () => {
  const advanced = videos.filter((obj) => obj.courseLevel == "advanced");
  return (
    <div className="box">
      <div className="panel">
        <div className="advanced-page">
          {advanced.map((obj) => (
            <div key={obj._id} className="{obj.title}">
              <embed src={obj.videoLink}></embed>
              <p className="advanced-text-1">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advanced;
