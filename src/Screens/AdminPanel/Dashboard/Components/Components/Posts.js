import React, { Component } from "react";
import { List, ListItem } from "@material-ui/core";
import firebase from "firebase";
import "firebase/firestore";

import DataTable from "./MaterialUiTable";
import PostButtons from "./PostButtons";
export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPosts: [],
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    let self = this;
    let db = firebase.firestore();
    db.collection("posts")
      .get()
      .then(function (querySnapshot) {
        var theData = [];
        querySnapshot.forEach(function (doc) {
          var info = {
            id: doc.id,
            data: doc.data(),
            date: doc.data().time.toDate(),
          };
          theData.push(info);
        });
        self.setState(
          (self.state = {
            listOfPosts: theData,
          })
        );
      });
  }
  render() {
    return (
      <>
        <PostButtons></PostButtons>
        <br></br>
        <br></br>
        <br></br>
        <DataTable data={this.state.listOfPosts}></DataTable>
      </>
    );
  }
}
