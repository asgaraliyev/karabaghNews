import React, { Component, useEffect } from "react";
import "./scss/style.scss";
import MenuIcon from "../../Icons/MenuIcon";
// import { Colors } from "../../Config/Colors";
import SearchIcon from "../../Icons/SearchIcon";
import BackArrow from "../../Icons/BackArrow";
import History from "../../Config/History/RouterHistory";
import { useDispatch } from "react-redux";
import { change_Menu_Stuation_Action } from "../../Redux/Actions/index";
export default function Header(props) {
  const go_Back_Function = () => {
    History.back();
  };
  const dispatch = useDispatch();
  const { type, title, classNamee, lightContent } = props.info;
  const change_Menu_Stuation = (whichOne) => {
    dispatch(change_Menu_Stuation_Action(whichOne));
  };
  var backArrowClassName = "icon";
  var titleClassName = "";
  if (lightContent) {
    backArrowClassName += " white";
    titleClassName += "white";
  }

  return (
    <header className={classNamee}>
      <div className="side left">
        {type === "home" ? (
          <div className="menu-by-red-cirlce" onClick={()=>change_Menu_Stuation("MENU")}>
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
                classNamee: backArrowClassName,
              }}
            ></BackArrow>
          </div>
        )}
      </div>
      <div className="side center">
        <h2 className={titleClassName}>{title}</h2>
      </div>
      <div className="side right">
        {type == "anews" ? null : (
          <div className="search-by-red-cirlce" onClick={()=>change_Menu_Stuation("SEARCH")}>
            <SearchIcon
              info={{
                classNamee: "search-icon",
              }}
            ></SearchIcon>
          </div>
        )}
      </div>
    </header>
  );
}
