import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import HomePage from './components/container/HomePage';
import NewPage from './components/container/NewPage';
import EditPage from './components/container/EditPage.js';
import DeletePage from './components/container/DeletePage.js';
import Notfound from './components/common/NotFound';

import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEye, faSave, faPencilAlt, faTrashAlt, faGlobe, faLink, faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEye, faSave, faPencilAlt, faTrashAlt, faGlobe, faLink, faArrowLeft, faTimes)

const routing = (
    <Router>
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className="navbar-brand">
                    <Link to="/">Home</Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/new">New</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/new" component={NewPage} />
                <Route exact path="/edit/:id" component={EditPage} />
                <Route exact path="/delete/:id" component={DeletePage} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))




//import App from './App';
//import FormPage from './components/container/FormPage';
//import Add from './components/Add';

/*
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
            </Switch>
        </div>
    </Router>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/