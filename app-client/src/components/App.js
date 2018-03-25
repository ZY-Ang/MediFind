import React, {Component}  from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {ROUTE_HOME} from "../constants/routes";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import LandingPage from "./LandingPage";
import NotFoundPage from "./error/NotFoundPage";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <Router>
                <Route render={({location}) => (
                    <div style={{height: '100%'}}>
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={300}
                                classNames="fade"
                            >
                                <Switch location={location}>
                                    <Route path={ROUTE_HOME} exact component={LandingPage} />
                                    <Route path={'*'} exact component={NotFoundPage} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                        <Footer/>
                    </div>
                )}/>
            </Router>
        );
    }
}

export default App;
