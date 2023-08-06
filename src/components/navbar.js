import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container">
                <Link to="/" className="navbar-brand mb-0 h1">
                    Login
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/page1" className="nav-link">
                                Page 1
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/page2" className="nav-link">
                                Page 2
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/page3" className="nav-link">
                                Page 3
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;