import React, { Component } from "react";
import DrawerA from "./Components/Drawer/DrawerA";
import "./scss/style.scss";
import ContentSideA from "./Components/ContentSide/ContentSideA";
export default class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <DrawerA></DrawerA>
        <ContentSideA></ContentSideA>
      </div>
    );
  }
}
