import React, { Component } from "react";
import { List, ListItem } from "@material-ui/core";
import firebase from "firebase";
import "firebase/firestore";
import { Button } from "antd";
import { connect } from "react-redux";
import { change_Dialog_Content_Action } from "../../../../../Redux/Actions/index";

class Catagories extends Component {
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
    // function addCatagoryHandler() {
    //   console.log("sea");
    //   var info = {
    //     data: {
    //       isDialogOpen: true,
    //       dialogComponentName: "addCatagoryComponent",
    //     },
    //   };
    //   this.props.dispatch(change_Dialog_Content_Action(info));
    // }
    return (
      <>
        <Button button >
          Add Catagory
        </Button>
        <List>
          {this.state.listOfCategories.map((category) => {
            return <ListItem button>{category}</ListItem>;
          })}
        </List>
      </>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Catagories);
