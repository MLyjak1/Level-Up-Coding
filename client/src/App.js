import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import Navbar from "./components/Navbar.js"
import Home from './pages/Home';
import Beginner from './pages/Beginner';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './pages/Login';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App(){
 return(
  <Router>
    <div>
  <Navbar/>
     </div>
      <Routes>
       <Route path="/home"
       element={<Home />} 
       />
       <Route path="/about"
       element={<About />} 
       />
       <Route path="/beginner"
       element={<Beginner />} 
       />
       <Route path="/login"
       element={<Login />} 
       />
       <Route path="/profile"
       element={<Profile />} 
       />

      </Routes> 
    </Router>
 );
};



export default App;













































// export default function App() {
  
//   const [currentPage, setCurrentPage] = useState('Home');

//   const renderPage = () => {
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Beginner') {
//       return <Beginner />;
//     }
//     if (currentPage === 'Advanced') {
//       return <Advanced />;
//     }
//     if (currentPage === 'Profile') {
//       return <Profile />;
//     }
//     return <Home />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

 

//   <div className="App">
//     <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         <code>This is Group 2's Test</code>
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//       {renderPage()}
//     </header>
//   </div>

// }


