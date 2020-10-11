import React, { Component } from "react";
import Header from "../../Components/Header/Header";
export default class SearchPage extends Component {
  render() {
    return (
      <div>
        <Header
          info={{
            type: "search",
            title: "News",
          }}
        ></Header>
        SearchPage
      </div>
    );
  }
}
