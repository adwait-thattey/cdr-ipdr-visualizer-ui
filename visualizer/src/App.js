import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Sidebar from './components/Sidebar/Sidebar.js';
import Auth from './containers/Auth/Auth';
<<<<<<< HEAD
import Upload from './containers/Upload/Upload.js';
=======
import Upload from './containers/Upload/Upload';
>>>>>>> upload_ui

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
            <Route path="/upload">
              <Upload />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
