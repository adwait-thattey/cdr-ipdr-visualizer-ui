import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Sidebar from './components/Sidebar/Sidebar.js';
import Auth from './containers/Auth/Auth';
import Upload from './containers/Upload/Upload';
import Map from './containers/Map/Map';
import Dashboard from './containers/Dashboard/Dashboard';
import Alerts from './containers/Alerts/Alerts';
import Cluster from './containers/Cluster/Cluster';

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
              <Auth />
            </Route>
            <Route exact path="/upload">
              <Upload />
            </Route>
            <Route path="/upload/:id">
              <Upload />
            </Route>
            <Route path="/map/:id">
              <Map />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/cluster">
              <Cluster />
            </Route>
            <Route path="/alerts">
              <Alerts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
