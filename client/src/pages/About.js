import React from 'react';

const About = () => {
    return (
        <section className="aboutPage">
            <title className="aboutTitle flex justify-center">
                <h1 className="">About</h1>
            </title>

            <main className="aboutContent flex flex-wrap justify-center">
                <p className='break-after-column'>
                    Thanks for visiting our website! 
                    Our goal at Level Up coding is to help people learn how to code at any level of experience! 
                    Feel free to navigate to the different course pages to watch whichever tutorial you are interested.
                    Please look at the information below to contact one of the developers. Happy coding!
                </p>
                {/* <br />
                <p>
                    Our goal at Level Up coding is to help people learn how to code at any level of experience!
                </p>
                <br />
                <p>
                    Feel free to navigate to the different course pages to watch whichever tutorial you are interested.
                </p>
                <br />
                <p>
                    Please look at the information below to contact one of the developers. Happy coding!
                </p> */}
            </main>
        </section>
    );
};
    
    export default About;