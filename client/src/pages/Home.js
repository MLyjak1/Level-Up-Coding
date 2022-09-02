import React from "react";
import videos from "../utils/videoSeeds.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	let beginner = videos.filter((obj) => obj.courseLevel == "beginner")[0];
	let intermediate = videos.filter(
		(obj) => obj.courseLevel == "intermediate"
	)[0];
	let advanced = videos.filter((obj) => obj.courseLevel == "advanced")[0];

	const goToBeginnerPage = (event) => {
		navigate("/beginner");
	};
	const goToIntermediatePage = (event) => {
		navigate("/intermediate");
	};
	const goToAdvancedPage = (event) => {
		navigate("/advanced");
	};
	return (
        <div className="box">
        <div className="panel">
		<section className="homePage">
			<h1 className="beginnerHeader px-4 mb-2">Beginner Coding Tutorials</h1>
			<div className="beginner md:flex justify-end justify-between px-4">
				<embed src={beginner.videoLink}></embed>
				<div className="beginnerInfo text-lg">
					<p className="beginner-text px-2">
						These videos are best for people just starting out coding. It covers topics such as basic HTML and CSS.
					</p>
					<button
						className="home-button px-2"
						style={{ cursor: "pointer" }}
						onClick={goToBeginnerPage}
					>
						Click here to go to Beginner Courses
					</button>
				</div>
			</div>
			<h1 className="intermediateHeader px-4 mt-6 mb-2">Intermediate Coding Tutorials</h1>
			<div className="intermediate md:flex justify-end justify-between px-4">
				<embed src={intermediate.videoLink}></embed>
				<div className="intermediateInfo text-lg">
					<p className="intermediate-text px-2">
						These videos are geared towards coders who are ready to get into the meat of coding with languages like JavaScript.
					</p>
					<button
						className="home-button px-2"
						style={{ cursor: "pointer" }}
						onClick={goToIntermediatePage}
					>
						Click here to go to Intermediate Courses
					</button>
				</div>
			</div>
			<h1 className="advancedHeader px-4 mt-6 mb-2">Advanced Coding Tutorials</h1>
			<div className="advanced md:flex justify-end justify-between px-4">
				<embed src={advanced.videoLink}></embed>
			<div className="advancedInfo text-lg">	
				<p className="advanced-text px-2">
					These courses are designed to deeply immerse budding developers into JavaScript and JQuery.
				</p>
				<button
					className="home-button px-2"
					style={{ cursor: "pointer" }}
					onClick={goToAdvancedPage}
				>
					Click here to go to Advanced Courses
				</button>
			</div>
			</div>
		</section>
        </div>
        </div>
	);
};

export default Home;

// import React from 'react';
// // import videos from '../utils/videoSeeds.json';
// import { useNavigate } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_VIDEOS } from '../utils/queries';

// // const beginners = data?.videos || {};
// // if (loading) {
// //     return <div>Loading...</div>;
// // }

// // const { loading, data } = useQuery(QUERY_VIDEOS, {
// //     // pass URL parameter
// //     variables: { courseLevel: "advanced" },
// //   });

// // const advanced = data?.videos || {};
// // if (loading) {
// //     return <div>Loading...</div>;
// // }

// // const { loading, data } = useQuery(QUERY_VIDEOS, {
// //     // pass URL parameter
// //     variables: { courseLevel: "intermediate" },
// //   });

// // const intermediate = data?.videos || {};
// // if (loading) {
// //     return <div>Loading...</div>;
// // }
// const Home = () => {
//     const navigate = useNavigate();
//     const { loading, data } = useQuery(QUERY_VIDEOS, {
//         // pass URL parameter
//         variables: { courseLevel: "beginner" },
//     });

//     const beginnerVideos = data?.videos || {};
//     if (loading) {
//         return <div>Loading...</div>;
//     }
//     console.log(data);
//     // const videos = beginnerData?.videos || [];

//     // console.log(videos);
//     // let beginner = videos.filter(video=>video.courseLevel=='beginner')[0];
//     // let intermediate = videos.filter(video=>video.courseLevel=='intermediate')[0];
//     // let advanced = videos.filter(video=>video.courseLevel=='advanced')[0];

//     const goToBeginnerPage = (event) => {
//         navigate("/beginner");
//     };
//     const goToIntermediatePage = (event) => {
//         navigate("/intermediate");
//     };
//     const goToAdvancedPage = (event) => {
//         navigate("/advanced");
//     };

//     return(
//         <section className='homePage'>
//         <div className='beginner'>
//             <h1 className='beginnerHeader'>Beginner Coding Tutorials</h1>
//                 <embed src={beginnerVideos.videoLink}></embed>
//                 <p className='beginner-text'>
//                     Placeholder text, will come back and finish later. Will describe the 3 beginner videos.
//                 </p>
//                 <button className='beginner-button'
//                         style={{ cursor: 'pointer' }}
//                         onClick={goToBeginnerPage}
//                 >
//                     Beginner Page
//                 </button>
//         </div>

//         {/* <div className='intermediate'>
//             <h1 className='intermediateHeader'>Intermediate Coding Tutorials</h1>
//                 <embed src={intermediate.videoLink}></embed>
//                 <p className='intermediate-text'>
//                     Placeholder text, will come back and finish later. Will describe the 3 intermediate videos.
//                 </p>
//                 <button className='intermediate-button'
//                         style={{ cursor: 'pointer' }}
//                         onClick={goToIntermediatePage}
//                 >
//                     Intermediate Page
//                 </button>
//         </div>

//         <div className='advanced'>
//             <h1 className='advancedHeader'>Advanced Coding Tutorials</h1>
//                 <embed src={advanced.videoLink}></embed>
//                 <p className='advanced-text'>
//                     Placeholder text, will come back and finish later. Will describe the 3 advanced videos.
//                 </p>
//                 <button className='advanced-button'
//                         style={{ cursor: 'pointer' }}
//                         onClick={goToAdvancedPage}
//                 >
//                     Advanced Page
//                 </button>
//         </div> */}

//         <div className='intermediate'>
//             <h1 className='intermediateHeader'>Intermediate Coding Tutorials</h1>
//                 <iframe src=''></iframe>
//                 <p className='intermediate-text'>
//                     Placeholder text, will come back and finish later. Will describe the 3 intermediate videos.
//                 </p>
//                 <button className='intermediate-button'
//                         style={{ cursor: 'pointer' }}
//                         onClick={goToIntermediatePage}
//                 >
//                     Intermediate Page
//                 </button>
//         </div>

//         <div className='advanced'>
//             <h1 className='advancedHeader'>Advanced Coding Tutorials</h1>
//                 <iframe src=''></iframe>
//                 <p className='advanced-text'>
//                     Placeholder text, will come back and finish later. Will describe the 3 advanced videos.
//                 </p>
//                 <button className='advanced-button'
//                         style={{ cursor: 'pointer' }}
//                         onClick={goToAdvancedPage}
//                 >
//                     Advanced Page
//                 </button>
//         </div>
//         </section>
//     )
// };

// export default Home;
