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
          <ListItem onClick={() => catagory_Changed(text)} button key={text}>
            <Link to={`/catagory/${text}`}>
              <h3>{text}</h3>
            </Link>
          </ListItem>
        ))}
      </List>
      <br></br>
      <h1>More</h1>
      <List>
        {moreCatagories.map((text, index) => (
          <ListItem button key={text}>
            <h3>{text}</h3>
          </ListItem>
        ))}
      </List>
      <br></br>
      <h1>Karabagh News</h1>
      <List>
        <Typography style={{ paddingRight: "3em" }}>
          Elit amet irure elit consectetur. Cillum excepteur eiusmod
          exercitation fugiat esse deserunt ut commodo enim voluptate ipsum
          pariatur exercitation. Esse voluptate sint eiusmod in. Reprehenderit
          nostrud et proident nulla eiusmod nisi amet quis. Amet irure et Lorem
          magna do incididunt. Dolor veniam do dolor enim sit in. Esse esse ut
          Lorem magna non adipisicing elit. Aliqua cupidatat nisi cupidatat
          occaecat nostrud fugiat mollit duis incididunt veniam nostrud.
          Excepteur id proident et in excepteur dolor quis nisi et voluptate
          laborum sint. Consequat ex minim laborum minim duis irure et irure
          cupidatat non reprehenderit mollit. Qui pariatur labore ex sit eiusmod
          minim. Aliqua proident quis velit mollit est eu nulla mollit mollit
          occaecat. Est irure nulla qui ipsum irure enim irure aliquip deserunt
        </Typography>
      </List>
    </>
  );
}
