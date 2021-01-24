import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Index from "./pages/Index";
import Error404 from "./pages/404";


import './App.css';


export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/404" component={Error404} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}
