import React, { Component } from "react";
import { List, ListItem } from "@material-ui/core";
import firebase from "firebase";
import "firebase/firestore";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { change_Dialog_Content_Action } from "../../../../../Redux/Actions/index";
import AddOrDeleteCatagoryFunction from "./Functions/AddOrDeleteCatagoryFunction";
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
    const dispatch = this.props.dispatch;
    const deleteCatagoryHandler = (catagory) => {
      AddOrDeleteCatagoryFunction({
        type: "DELETE",
        data: catagory,
      });
      this.getData();
    };
    return (
      <>
        <Button
          color="primary"
          onClick={() => {
            var info = {
              data: {
                isDialogOpen: true,
                dialogComponentName: "addCatagoryComponent",
              },
            };
            dispatch(change_Dialog_Content_Action(info));
          }}
        >
          Add Catagory
        </Button>
        <List>
          {this.state.listOfCategories.map((catagory) => {
            return (
              <ListItem key={catagory}>
                <h2>{catagory}</h2>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    deleteCatagoryHandler(catagory);
                  }}
                >
                  Delete
                </Button>
              </ListItem>
            );
          })}
        </List>
      </>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Catagories);
