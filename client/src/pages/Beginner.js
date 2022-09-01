import React from "react";
import videos from "../utils/videoSeeds.json";

const Beginner = () => {
  const beginner = videos.filter(
    (obj) => obj.courseLevel == "beginner",
  );
  return (
    <div className="box">
      <div className="panel">
        <div className="beginner-page">
          {beginner.map((obj) => (
            <div key={obj._id} className="{obj.title}">
              <embed src={obj.videoLink}></embed>
              <p className="beginner-text-1">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beginner;
