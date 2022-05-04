import './App.scss';
import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {useSelector} from "react-redux";
import {Navbar} from '../navbar/Navbar';
import {ROUTES} from "../../constants";
import {selectBgImage} from "../../store/selectors/bg-image.selector";


function App() {
    const background = useSelector(selectBgImage);

    return (
        <div
            className="App-root-wrapper container-fluid min-vh-100"
            style={{
                backgroundImage: `url(${background})`
            }}
        >

            <div className="App-container container min-vh-100 d-flex flex-column">
                <header
                    className="row justify-content-center"
                    id="navbar"
                >
                    <div className="col-12">
                        <Navbar/>
                    </div>
                </header>

                <section className="row pt-5 flex-grow-1">
                    <div className="col-12">
                        <Switch>
                            {
                                ROUTES.map((route, index) =>
                                    <Route
                                        key={index}
                                        path={route.path}
                                    >
                                        {route.component}
                                    </Route>
                                )
                            }
                            <Route
                                exact
                                path="/"
                                render={() => {
                                    return (
                                        <Redirect to={ROUTES[0].path} />
                                    )
                                }}
                            />
                        </Switch>
                    </div>
                </section>

                <footer></footer>
            </div>
        </div>
    );
}

export default App;
