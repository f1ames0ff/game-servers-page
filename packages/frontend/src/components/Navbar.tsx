import React from "react";
import { Link } from "react-router-dom";


export function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand"
                  to="/">f1am3d games</Link>

            <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

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
                            <b>Discord</b>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}