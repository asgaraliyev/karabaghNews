import React, { Component } from "react";
import "./scss/style.scss";
import MenuIcon from "../../Icons/MenuIcon";
import { Colors } from "../../Config/Colors";
import SearchIcon from "../../Icons/SearchIcon";
import BackArrow from "../../Icons/BackArrow";
import History from "../../Config/History/RouterHistory";

export default function Header(props) {
  const go_Back_Function = () => {
    History.back();
  };
  const { type, title } = props.info;

  return (
    <header>
      <div className="side left">
        {type === "home" ? (
          <div className="menu-by-red-cirlce">
            <MenuIcon
              info={{
                classNamee: "icon",
              }}
            ></MenuIcon>
            <span>1</span>
          </div>
        ) : (
          <div className="menu-by-red-cirlce" onClick={go_Back_Function}>
            <BackArrow
              info={{
                classNamee: "icon",
              }}
            ></BackArrow>
          </div>
        )}
      </div>
      <div className="side center">
        <h2>{title}</h2>
      </div>
      <div className="side right">
        <div className="search-by-red-cirlce">
          <SearchIcon
            info={{
              classNamee: "search-icon",
            }}
          ></SearchIcon>
        </div>
      </div>
    </header>
  );
}
