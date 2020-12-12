import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import  Home from './Home';
import { Experience } from './Experience';
import { Suggestions } from './Suggestions';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar';

import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import "./shards-dashboard/styles/healer.css";


class App extends React.Component {

render() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/suggestions" component={Suggestions} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
  }
}

export default App;
