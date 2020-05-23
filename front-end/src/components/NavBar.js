import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GetPins from './getPins'
import GetOnePin from './getOnePin'
import { MasonryPage } from './MasonryPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from './Home'
import './NavBar.css';

export const NavBar = () => {
    return (
        <Router>
        <div>
            <nav className="navbar">
                <div className="navbar-item navbar-icon">
                    <FontAwesomeIcon className="pinterest-icon" icon={['fab', 'pinterest']} />
                </div>
                <div className="navbar-item navbar-button black-button">
                    <Link to={'/'} className="white">Inicio</Link>
                </div>
                <div className="navbar-item navbar-button white button">
                    <Link to={'/test'} className="black">Siguiendo</Link>
                </div>
                <div className="search-item">
                    <input className="search-input" placeholder="Search"></input>
                </div>
                <div className="navbar-item navbar-icon">
                    <FontAwesomeIcon className="icon" icon="bell" />
                </div>
                <div className="navbar-item navbar-icon">
                    <FontAwesomeIcon className="icon" icon="comment-dots" />
                </div>
            </nav>
            <Switch>
                <Route exact path='/get/pins' render={() => <GetPins/> } />
                <Route exact path='/get/pins/:id' component={ GetOnePin } />
                <Route exact path='/test' render={() => <MasonryPage/> } />
                <Route exact path='/' render={() => <Home/>} />
            </Switch>
        </div>
        </Router>
    );
}

export default NavBar;