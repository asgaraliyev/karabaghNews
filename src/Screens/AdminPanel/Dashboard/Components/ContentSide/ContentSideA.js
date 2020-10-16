import React, { Component } from "react";
import "./scss/style.scss";
import Store from "../../../../../Redux/SuperMarket/SuperMarket";
import Dashboard from "../Components/Dashboard";
import Posts from "../Components/Posts";
import Catagories from "../Components/Catagories";
function DashboardComponent() {
  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
}
function PostsComponent() {
  return (
    <>
      <Posts></Posts>
    </>
  );
}
function CatagoriesComponent() {
  return (
    <>
      <Catagories></Catagories>
    </>
  );
}
export default class ContentSideA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "dashboard",
    };
  }
  componentDidMount() {
    Store.subscribe(() => {
      var component;
      if (Store.getState().dashboardContent === "posts") {
        component = PostsComponent();
      } else if (Store.getState().dashboardContent === "catagories") {
        component = CatagoriesComponent();
      } else {
        component = DashboardComponent();
      }
      this.setState(
        (this.state = {
          component: component,
        })
      );
    });
  }
  render() {
    return <div id="dashboard-content-side">{this.state.component}</div>;
  }
}
