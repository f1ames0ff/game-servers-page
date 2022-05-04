import './Navbar.scss';
import React from "react";
import {Link} from "react-router-dom";
import {IMAGES, ROUTES} from "../../constants";


export function Navbar() {
    const iconSrc = IMAGES.titleImg;

    return <nav className="App-navbar navbar  container navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="icon">
                <img
                    className="img-thumbnail"
                    src={iconSrc}
                    width={64}
                    alt="..."
                />
            </div>

            <Link
                className="navbar-brand"
                to="/"
            >
                pro100.skill
            </Link>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        ROUTES.map((route, index) =>
                            <li
                                className="nav-item"
                                key={index}
                            >
                                <Link

                                    className="nav-link"
                                    to={route.path}
                                >
                                    {route.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </nav>
}
