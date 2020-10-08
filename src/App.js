import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from './Screens/HomePage/HomePage'
import SearchPage from './Screens/SearchPage/SearchPage'
import ACatagory from './Screens/ACatagory/ACatagory'
import ANews from './Screens/aNews/ANews'
import "./main.scss"
function App() {
  return (
    <Router>
      <div id="app" >
        <Switch>
          <Route exact path="/"><HomePage></HomePage></Route>
          <Route exact path="/search"><SearchPage></SearchPage></Route>
          <Route exact path="/a-catagory"><ACatagory></ACatagory></Route>
          <Route exact path="/a-news"><ANews></ANews></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
