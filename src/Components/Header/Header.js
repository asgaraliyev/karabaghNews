import React, { Component } from "react";
import "./scss/style.scss";
import MenuIcon from "../../Icons/MenuIcon";
import { Colors } from "../../Config/Colors";
import SearchIcon from "../../Icons/SearchIcon";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="side left">
          <div className="menu-by-red-cirlce">
            <MenuIcon classNameSvg="menu-icon"></MenuIcon>
            <span>1</span>
          </div>
        </div>
        <div className="side center">
          <h2>News</h2>
        </div>
        <div className="side right">
          <div className="search-by-red-cirlce">
            <SearchIcon classNameSvg="search-icon"></SearchIcon>
          </div>
        </div>
      </header>
    );
  }
}
