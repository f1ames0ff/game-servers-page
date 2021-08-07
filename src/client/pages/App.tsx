import './App.scss'
import React from 'react';
import { connect } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import { ValheimPage } from "../components/tabs/ValheimPage";
import { HomePage } from '../components/tabs/HomePage';
import { AppState } from "../store/store";
import { DiscordPage } from '../components/tabs/DiscordPage';
import { Navbar } from '../components/Navbar';
import { QuakeCPMAPage } from "../components/tabs/QuakeCPMAPage";
import { QuakeQ2Page } from "../components/tabs/Quake2Page";
import { QuakeQWPage } from "../components/tabs/QuakeQWPage";
import { SupportPage } from "../components/tabs/SupportPage";


const mapStateToProps = (state: AppState) => ( { background: state.general.background } );

function App(props: ReturnType<typeof mapStateToProps>) {
    return (
        <div className="App-root-wrapper container-fluid min-vh-100"
             style={ {
                 backgroundImage: `url(${ props.background })`
             } }>

            <div className="App-container container min-vh-100 d-flex flex-column">
                <header className="row justify-content-center" id="navbar">
                    <div className="col-12">
                        <Navbar/>
                    </div>
                </header>

                <section className="row pt-5 flex-grow-1">
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

                            <Route path="/support">
                                <SupportPage/>
                            </Route>

                            <Route exact path="/">
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
