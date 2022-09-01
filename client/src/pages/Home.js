import React from 'react';
import videos from '../utils/videoSeeds.json';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    let beginner = videos.filter(obj=>obj.courseLevel=='beginner')[0];
    let intermediate = videos.filter(obj=>obj.courseLevel=='intermediate')[0];
    let advanced = videos.filter(obj=>obj.courseLevel=='advanced')[0];

    const goToBeginnerPage = (event) => {
        navigate("/beginner");
    };
    const goToIntermediatePage = (event) => {
        navigate("/intermediate");
    };
    const goToAdvancedPage = (event) => {
        navigate("/advanced");
    };

    return(
        <section className='homePage'>
        <div className='beginner '>
            <h1 className='beginnerHeader'>Beginner Coding Tutorials</h1>
                <embed className="" src={beginner.videoLink}></embed>
                <p className='beginner-text'>
                    Placeholder text, will come back and finish later. Will describe the 3 beginner videos.
                </p>
                <button className='beginner-button'
                        style={{ cursor: 'pointer' }}
                        onClick={goToBeginnerPage}
                >
                    Beginner Page
                </button>
        </div>

        <div className='intermediate'>
            <h1 className='intermediateHeader'>Intermediate Coding Tutorials</h1>
                <iframe src=''></iframe>
                <p className='intermediate-text'>
                    Placeholder text, will come back and finish later. Will describe the 3 intermediate videos.
                </p>
                <button className='intermediate-button'
                        style={{ cursor: 'pointer' }}
                        onClick={goToIntermediatePage}
                >
                    Intermediate Page 
                </button>
        </div>

        <div className='advanced'>
            <h1 className='advancedHeader'>Advanced Coding Tutorials</h1>
                <iframe src=''></iframe>
                <p className='advanced-text'>
                    Placeholder text, will come back and finish later. Will describe the 3 advanced videos.
                </p>
                <button className='advanced-button'
                        style={{ cursor: 'pointer' }}
                        onClick={goToAdvancedPage}
                >
                    Advanced Page
                </button>
        </div>
        </section>
    )
};

export default Home;