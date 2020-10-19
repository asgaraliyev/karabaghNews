import React, { Component } from "react";
import "./scss/style.scss";
import Logo from "../../../Images/logo.jpg";
import {
  Container,
  List,
  ListItem,
  TextField,
  Button,
  Form,
} from "@material-ui/core";
import Image from "material-ui-image";
import firebase from "../../../Firebase";
import * as firebaseui from "firebaseui";
export default class AdminLogin extends Component {
  componentDidMount() {
    const uiConfig = {
      signInSuccessUrl: window.location.origin + "/admin-panel",
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <Container id="firebaseui-auth-container">
        {/* <form onSubmit={this.onSignInSubmit()}>
          <List>
            <ListItem>
              <div className="list-item">
                <Image src={Logo}></Image>
              </div>
            </ListItem>
            <ListItem style={{ width: "100%" }}>
              <div className="list-item" style={{ width: "100%" }}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                />
              </div>
            </ListItem>
            <ListItem style={{ width: "100%" }}>
              <div className="list-item" style={{ width: "100%" }}>
                <div id="recaptha-container"></div>
              </div>
            </ListItem>
            <ListItem style={{ width: "100%" }}>
              <div className="list-item" style={{ width: "100%" }}>
                <Button style={{ width: "100%" }} variant="contained">
                  Login
                </Button>
              </div>
            </ListItem>
          </List>
        </form> */}
      </Container>
    );
  }
}
