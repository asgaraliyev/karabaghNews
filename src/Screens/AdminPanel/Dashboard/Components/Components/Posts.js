import React, { Component } from "react";

import firebase from "firebase";
import "firebase/firestore";
export default class Posts extends Component {
  render() {
    let db = firebase.firestore();
    db.collection("posts")
      .get()
      .then(function (querySnapshot) {
        return querySnapshot;
      });

    return <div>Posts</div>;
  }
}
