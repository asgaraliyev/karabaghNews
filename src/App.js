import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import HomePage from "./Screens/HomePage/HomePage";
import SearchPage from "./Screens/SearchPage/SearchPage";
import ACatagory from "./Screens/ACatagory/ACatagory";
import ANews from "./Screens/aNews/ANews";
import "./main.scss";
import ls from "local-storage";
import History from "./Config/History/RouterHistory";
import { useSelector, useDispatch } from "react-redux";
import DrawerMenu from "./Components/Drawer/DrawerMenu";
import AdminLogin from "./Screens/AdminPanel/AdminLogin/AdminLogin";
import Dashboard from "./Screens/AdminPanel/Dashboard/Dashboard";
// import { change_Firebase_Action } from "./Redux/Actions/index";
// import SuperMarket from "./Redux/SuperMarket/SuperMarket";
import TheDialog from "./Screens/AdminPanel/Dashboard/Components/Components/DialogForContents";

function App() {
  var theMenu = useSelector((state) => state.theMenu.menuIsOpen);
  const dispatch = useDispatch();
  if (theMenu) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }

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
  return (
    <Router history={History}>
      <div id="app">
        <DrawerMenu amIOpen={theMenu}></DrawerMenu>
        <TheDialog ></TheDialog>
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
            <Route exact path="/admin-login">
              <AdminLogin></AdminLogin>
            </Route>
            <PrivateRoute user={user} path="/admin-panel">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

// screen if you're not yet authenticated.
function PrivateRoute({ children, user, ...rest }) {
  if (user == null) {
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
        {...rest}
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
