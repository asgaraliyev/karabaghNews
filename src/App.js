import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./Screens/HomePage/HomePage";
import SearchPage from "./Screens/SearchPage/SearchPage";
import ACatagory from "./Screens/ACatagory/ACatagory";
import ANews from "./Screens/aNews/ANews";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./main.scss";
import History from './Config/History/RouterHistory'
function App() {
  return (
    <Router history={History}>
      <div id="app">
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/search">
            <SearchPage></SearchPage>
          </Route>
          <Route exact path="/catagory/:catagoryName">
            <ACatagory></ACatagory>
          </Route>
          <Route exact path="/news">
            <ANews></ANews>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
