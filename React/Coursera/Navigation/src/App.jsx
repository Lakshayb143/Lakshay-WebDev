import HomePage from "./HomePage";
import AboutMe from "./AboutMe";

import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
const App = () => {
    return (
        <div className="App">
            <nav className="navbar">
                {/* <a href="#" className="nav-item">
                    Home Page
                </a>
                <a href="#" className="nav-item">
                    About Me
                </a> */}
                <Link to="/" className="nav-item">
                    Home Page
                </Link>
                <Link to="/aboutme" className="nav-item">
                    About me
                </Link>
            </nav>
            {/* <HomePage />
            <AboutMe/> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
        </div>
    );
};
export default App;
