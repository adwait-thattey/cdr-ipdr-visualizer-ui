import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Sidebar from './components/Sidebar/Sidebar.js';

function App() {
    return (
        <Router>
            <div className="container-wrap">
                <Sidebar />
                <div className="main-target">
                    <Switch>
                        <Route path="/visualize">
                            <Home />
                        </Route>
                        <Route path="/auth" exact>
                            <Home />
                        </Route>
                        <Route path="/dashboard">
                            <Home />
                        </Route>
                    </Switch>
                </div>  
            </div>
        </Router>
    );
}

export default App;
