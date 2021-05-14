import './App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ValheimPage } from "./pages/ValheimPage";
import { HomePage } from './pages/HomePage';
import { connect } from "react-redux";
import { AppState } from "../store/store";
import { DiscordPage } from './pages/DiscordPage';
import { Navbar } from './Navbar';
import { QuakeCPMAPage } from "./pages/QuakeCPMAPage";
import { QuakeQ2Page } from "./pages/Quake2Page";
import { QuakeQWPage } from "./pages/QuakeQWPage";


const mapStateToProps = (state: AppState) => ( { background: state.general.background } );

function App(props: ReturnType<typeof mapStateToProps>) {
    return (
        <div className="App-root-wrapper container-fluid min-vh-100"
             style={ {
                 backgroundImage: `url(${ props.background })`
             } }>

            <div className="App-container container min-vh-100 d-flex flex-column">
                <header className="row justify-content-center ">
                    <div className="col-12">
                        <Navbar/>
                    </div>
                </header>

                <section className="row pt-2 flex-grow-1">
                    <div className="col-12">
                        <Switch>
                            <Route path="/valheim">
                                <ValheimPage/>
                            </Route>

                            <Route path="/quake-cpma">
                                <QuakeCPMAPage/>
                            </Route>

                            <Route path="/quake-q2">
                                <QuakeQ2Page/>
                            </Route>

                            <Route path="/quake-qw">
                                <QuakeQWPage/>
                            </Route>

                            <Route path="/discord">
                                <DiscordPage/>
                            </Route>

                            <Route path="/">
                                <HomePage/>
                            </Route>
                        </Switch>
                    </div>
                </section>

                <footer>

                </footer>
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(App);
