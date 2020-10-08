import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Catagories from "../../Components/Catagories/Catagories";
import Trending from "../../Components/Trending/Trending";

import Authors from "../../Components/Authors/Authors";
import EditorChoise from "../../Components/EditorChoise/EditorChoise";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Catagories></Catagories>
        <Trending></Trending>
        <Authors></Authors>
        <EditorChoise></EditorChoise>
      </div>
    );
  }
}
