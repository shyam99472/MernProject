import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Nav() {
    const { user } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#c1c1ff" }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    LanguageLearn
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link to="/home" className="nav-link text-dark">
                            Home
                        </Link>
                        <Link to="/lesson-display" className="nav-link text-dark">
                            Learn New Language
                        </Link>
                        <Link to="/your-courses" className="nav-link text-dark">
                            Your Lessons
                        </Link>
                        <Link to="/" className="nav-link text-dark">
                            Logout
                        </Link>
                        <Link to="/" className="nav-link text-dark">
                        {<p className="text-dark">{user.email}</p>}
                        </Link>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </nav>
    );
}
