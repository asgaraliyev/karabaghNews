import React, { useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";

import CloseIcon from "@material-ui/icons/Close";

import "./scss/style.scss";
import ls from "local-storage";
import { change_Menu_Stuation_Action } from "../../Redux/Actions/index";
import { useSelector, useDispatch } from "react-redux";

import Menu from "../Menu/Menu";
import SearchArea from "../SearchArea/SearchArea";
export default function DrawerMenu(props) {
  var { amIOpen } = props;
  const dispatch = useDispatch();
  const menuOrSearch = useSelector((state) => state.theMenu.whichOne);
  const menuCloser = () => {
    ls.set("theDrawer", false);
    dispatch(change_Menu_Stuation_Action(null));
  };

  return (
    <Drawer id="drawer" variant="persistent" anchor="left" open={amIOpen}>

      {menuOrSearch === "SEARCH" ? <SearchArea></SearchArea> : <Menu></Menu>}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div id="transparent-close-container">
        <button onClick={menuCloser}>
          <CloseIcon></CloseIcon>
        </button>
      </div>
    </Drawer>
  );
}
