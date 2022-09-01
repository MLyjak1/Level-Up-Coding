import React from 'react';
import videos from '../utils/videoSeeds.json';

const Intermediate = () => {
        const intermediate = videos.filter(obj=> obj.courseLevel == 'intermediate');
        return (
                <div className="box">
                <div className='panel'>
                        <div className='intermediate-page'>
                                {
                                        intermediate.map(obj => 
                                <div key = {obj._id} className='{obj.title}'>
                                <embed src={obj.videoLink}>
                                </embed>       
                                        <p className='intermediate-text-1'>
                                                {obj.description}
                                        </p>
                                </div>)
                                }
                        </div>
                </div>
        </div>
        )
};

export default Intermediate;