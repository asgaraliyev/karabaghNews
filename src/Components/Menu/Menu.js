import React, { Component } from "react";
import Image from "material-ui-image";
import Logo from "../../Images/logo.jpg";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { change_Menu_Stuation_Action } from "../../Redux/Actions/index";
export default function Menu() {
  const catagories = useSelector((state) => state.catagories);
  const moreCatagories = useSelector((state) => state.moreCatagories);
  const dispatch = useDispatch();
  function catagory_Changed() {
    dispatch(change_Menu_Stuation_Action("MENU"));
  }
  return (
    <>
      <div className="logo-container">
        <Image src={Logo}></Image>
      </div>
      <h1>News</h1>
      <List>
        {catagories.map((text, index) => (
          <Link key={index} to={`/catagory/${text}`}>
            <ListItem onClick={() => catagory_Changed(text)} button>
              <h3>{text}</h3>
            </ListItem>
          </Link>
        ))}
      </List>
      {/* <br></br>
      <h1>More</h1>
      <List>
        {moreCatagories.map((text, index) => (
          <ListItem button key={text}>
            <h3>{text}</h3>
          </ListItem>
        ))}
      </List> */}
      <br></br>
      <h1>Karabagh News</h1>
      <List>
        <Typography style={{ paddingRight: "3em" }}>
          Karabakh Truths is a simple news website created in 2020 by
          Azerbaijanian youth.But this news website is showing you the truth
          itself differently than others
        </Typography>
      </List>
    </>
  );
}
