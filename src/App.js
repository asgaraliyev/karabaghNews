import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./Screens/HomePage/HomePage";
import ACatagory from "./Screens/ACatagory/ACatagory";
import ANews from "./Screens/aNews/ANews";
import "./main.scss";
import ls from "local-storage";
import History from "./Config/History/RouterHistory";
import { useSelector } from "react-redux";
import DrawerMenu from "./Components/Drawer/DrawerMenu";
import AdminLogin from "./Screens/AdminPanel/AdminLogin/AdminLogin";
import Dashboard from "./Screens/AdminPanel/Dashboard/Dashboard";
// import { change_Firebase_Action } from "./Redux/Actions/index";
// import SuperMarket from "./Redux/SuperMarket/SuperMarket";
import ScrollToTop from "./ScrollToTop";
import TheDialog from "./Screens/AdminPanel/Dashboard/Components/Components/DialogForContents";
import ReactGA from "react-ga";
import NotFound from "./Screens/NotFound/NotFound";
import { Spin } from "antd";
ReactGA.initialize("G-250509579");
function App() {
  var theMenu = useSelector((state) => state.theMenu.menuIsOpen);
  if (theMenu) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }
  const [loader, setLoader] = useState(true);
  if (ls.get("theDrawer")) {
    theMenu = true;
  }
  const [user, setUser] = useState(null);
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
  });
  useEffect(() => {
    setLoader(false);
  }, []);
  return (
    <Router history={History}>
      <ScrollToTop></ScrollToTop>
      <div id="app">
        <DrawerMenu amIOpen={theMenu}></DrawerMenu>
        <TheDialog></TheDialog>
        <main>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route exact path="/catagory/:catagoryName/">
              <ACatagory></ACatagory>
            </Route>
            <Route exact path="/news/:newsName">
              <ANews></ANews>
            </Route>
            <Route exact path="/admin-login">
              <AdminLogin></AdminLogin>
            </Route>
            <PrivateRoute user={user} path="/admin-panel">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </main>
        {loader === true ? (
          <div id="loading-area">
            <h3>Karabakh Truths</h3>
            <br></br>
            <br></br>
            <Spin spinning={loader}></Spin>
          </div>
        ) : null}
      </div>
    </Router>
  );
}

// screen if you're not yet authenticated.
function PrivateRoute({ children, user }) {
  if (user === null) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    var isAdminLogedIn;
    if (user.uid === "yed1jC8uW2ZjItt7vseUwor5F833") {
      isAdminLogedIn = true;
    } else {
      isAdminLogedIn = false;
    }
    return (
      <Route
        render={({ location }) =>
          isAdminLogedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/admin-login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
}

export default App;
