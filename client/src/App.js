import React from "react";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports pages and components
import Home from "./pages/Home";
import Beginner from "./pages/Beginner";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar.js";

// Imports style
import "./App.css";

// Construct our main GraphQL API Endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


// Sets up client to execute the "authLink" middleware prior to making the request to our GraphQL API
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<Navbar />
				</div>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/beginner" element={<Beginner />} />
					<Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

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
