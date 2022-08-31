import React from 'react';

const Home = () => {
    return(
        <section className='homePage'>
        <div className='beginner'>
            <h1 className='beginnerHeader'>Beginner Coding Tutorials</h1>
                <source src='placeholder for video' type='placeholder'></source>
                <p className='beginner-text'>
                    Placeholder text, will come back and finish later. Will describe the 3 beginner videos.
                </p>
                <button className='beginner-button'
                        style={{ cursor: 'pointer' }}
                >
                    Beginner Page
                </button>
        </div>

        <div className='intermediate'>
            <h1 className='intermediateHeader'>Intermediate Coding Tutorials</h1>
                <source src='placeholder for video' type='placeholder'></source>
                <p className='intermediate-text'>
                    Placeholder text, will come back and finish later. Will describe the 3 intermediate videos.
                </p>
                <button className='intermediate-button'
                        style={{ cursor: 'pointer' }}
                >
                    Intermediate Page 
                </button>
        </div>

        <div className='advanced'>
            <h1 className='advancedHeader'>Advanced Coding Tutorials</h1>
                <source src='placeholder for video' type='placeholder'></source>
                <p className='advanced-text'>
                    Placeholder text, will come back and finish later. Will describe the 3 advanced videos.
                </p>
                <button className='advanced-button'
                        style={{ cursor: 'pointer' }}
                >
                    Advanced Page
                </button>
        </div>
        </section>
    )
};

export default Home;