import './Navbar.module.scss';
import React from "react";
import { Link } from "react-router-dom";


export function Navbar() {
    const iconSrc = `https://static-cdn.jtvnw.net/jtv_user_pictures/10ac9390-d81e-4962-9253-7bde85964995-profile_image-70x70.png`;

    return <nav className="App-navbar navbar  container navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="icon">
                <img className="img-thumbnail"
                     src={ iconSrc }
                     width={ 64 }
                     alt="..."/>
            </div>

            <Link className="navbar-brand"
                  to="/">pro100.skill</Link>

            <div className="collapse navbar-collapse"
                 id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/valheim">Valheim</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/quake-cpma">CPMA</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/quake-q2">Quake II</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/quake-qw">QuakeWorld</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/discord">
                            Discord
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link"
                              to="/support">
                            <b>Поддержать</b>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}