import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./Screens/HomePage/HomePage";
import SearchPage from "./Screens/SearchPage/SearchPage";
import ACatagory from "./Screens/ACatagory/ACatagory";
import ANews from "./Screens/aNews/ANews";
import "./main.scss";
import ls from "local-storage";
import History from "./Config/History/RouterHistory";
import { useSelector, useDispatch } from "react-redux";
import DrawerMenu from "./Components/Drawer/DrawerMenu";
// import { change_Menu_Stuation_Action } from "./Redux/Actions/index";

function App() {
  var theMenu = useSelector((state) => state.theMenu.menuIsOpen);

  if (theMenu) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

  if (ls.get("theDrawer")) {
    theMenu = true;
  }
  return (
    <Router history={History}>
      <div id="app">
        <DrawerMenu amIOpen={theMenu}></DrawerMenu>
        <main>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route exact path="/search">
              <SearchPage></SearchPage>
            </Route>
            <Route exact path="/catagory/:catagoryName/">
              <ACatagory></ACatagory>
            </Route>
            <Route exact path="/news/:newsName">
              <ANews></ANews>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
