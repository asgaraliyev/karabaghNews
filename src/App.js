import React,{useState} from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./Screens/HomePage/HomePage";
import SearchPage from "./Screens/SearchPage/SearchPage";
import ACatagory from "./Screens/ACatagory/ACatagory";
import ANews from "./Screens/aNews/ANews";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./main.scss";
import History from "./Config/History/RouterHistory";
import {useSelector} from 'react-redux';
function App() {
  const theMenu=useSelector(state=>state.theMenu)
  return (
    <Router history={History}>
      <div id="app">
        <Drawer variant="persistent" anchor="left" open={theMenu}>
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main>
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
        </main>
      </div>
    </Router>
  );
}

export default App;
