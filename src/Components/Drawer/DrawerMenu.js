import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";
import "./scss/style.scss";
import ls from "local-storage";
import { change_Menu_Stuation_Action } from "../../Redux/Actions/index";
import { useSelector, useDispatch } from "react-redux";
import Image from "material-ui-image";
import Logo from "../../Images/logo.jpg";
import { change_The_Link } from "../../Config/ChangingLink/ChangeLink";
export default function DrawerMenu(props) {
  const { amIOpen } = props;
  const dispatch = useDispatch();
  const catagories = useSelector((state) => state.catagories);
  const moreCatagories = useSelector((state) => state.moreCatagories);
  const menuCloser = () => {
    ls.set("theDrawer", false);
    dispatch(change_Menu_Stuation_Action());
  };
  function catagory_Changed(catalog) {
    const theLinkWillBe = window.location.origin + "/catagory/" + catalog;
    change_The_Link(theLinkWillBe);
  }
  return (
    <Drawer id="drawer" variant="persistent" anchor="left" open={amIOpen}>
      <div className="logo-container">
        <Image src={Logo}></Image>
      </div>
      <h1>News</h1>
      <List>
        {catagories.map((text, index) => (
          <ListItem onClick={() => catagory_Changed(text)} button key={text}>
            <h3>{text}</h3>
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
