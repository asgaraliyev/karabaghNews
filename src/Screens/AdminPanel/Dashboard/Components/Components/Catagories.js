import React, { Component } from "react";
import { List, ListItem } from "@material-ui/core";
import firebase from "firebase";
import "firebase/firestore";


export default class Catagories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCategories: [],
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    let self = this;
    let db = firebase.firestore();
    db.collection("catagories")
      .get()
      .then(function (querySnapshot) {
        var theData = [];
        querySnapshot.forEach(function (doc) {
          theData = doc.data().catagories;
        });
        self.setState(
          (self.state = {
            listOfCategories: theData,
          })
        );
      });
  }
  render() {
    return (
      <>
        <List>{this.state.listOfCategories.map((category) => {
          return(
            <ListItem button>{category}</ListItem>
          )
        })}</List>
      </>
    );
  }
}
