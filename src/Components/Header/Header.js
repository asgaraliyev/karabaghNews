import React, { Component,useEffect } from "react";
import "./scss/style.scss";
import MenuIcon from "../../Icons/MenuIcon";
import { Colors } from "../../Config/Colors";
import SearchIcon from "../../Icons/SearchIcon";
import BackArrow from "../../Icons/BackArrow";
import History from "../../Config/History/RouterHistory";
import {useDispatch} from 'react-redux'
import {change_Menu_Stuation_Action} from '../../Redux/Actions/index'
export default function Header(props) {
  const go_Back_Function = () => {
    History.back();
  };
  const dispatch = useDispatch()
  const { type, title } = props.info;
  const change_Menu_Stuation=()=>{
    dispatch(change_Menu_Stuation_Action())
   
 }
  return (
    <header>
      <div className="side left">
        {type === "home" ? (
          <div className="menu-by-red-cirlce" onClick={change_Menu_Stuation}>
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
