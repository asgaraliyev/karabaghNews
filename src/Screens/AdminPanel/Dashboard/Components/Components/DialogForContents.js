import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { change_Dialog_Content_Action } from "../../../../../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import { UncontrolledEditor } from "./AddPost";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import addPostFunction from "./Functions/AddPostFunction";
import AddCatagory from "./AddCatagory";
export default function FullScreenDialog() {
  var dialogReducerSelector = useSelector((state) => state.dialogReducer);
  const isDialogOpen = dialogReducerSelector.isDialogOpen;
  var dispatch = useDispatch();
  var [saveBtn, setSaveButtonCliked] = useState(false);

  const dialogCloser = () => {
    var info = {
      data: {
        isDialogOpen: false,
        dialogComponentName: null,
      },
    };
    dispatch(change_Dialog_Content_Action(info));
  };
  const dialogComponentName = dialogReducerSelector.dialogComponentName;
  var theComponentItSelf;
  var title = "Something went wrong here ...Sorry :(";
  if (dialogComponentName === "addPostComponent") {
    title = "add a new post";
  }
  return (
    <div>
      <Dialog fullScreen open={isDialogOpen}>
        <AppBar>
          <Toolbar>
            <IconButton
              style={{
                flex: 1,
              }}
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={dialogCloser}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              style={{
                flex: 9,
              }}
              variant="h6"
            >
              {title}
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={() => {
                setSaveButtonCliked(true);
              }}
              style={{
                flex: 1,
              }}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <br></br>
        <br></br>
        <TheComponent
          dispatch={dispatch}
          saveBtn={saveBtn}
          componentName={dialogComponentName}
        ></TheComponent>
      </Dialog>
      <Dialog
        open={saveBtn}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure about saving this post?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure about saving this post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={() => {
              setSaveButtonCliked(false);
            }}
          >
            No,Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => {
              addPostFunction();
            }}
            autoFocus
          >
            Yes,Post it!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
function TheComponent(props) {
  console.log("TheComponent -> props", props);
  if (props.dialogComponentName == "addPostComponent") {
    return (
      <UncontrolledEditor
        save={props.saveBtn}
        dispatch={props.dispatch}
      ></UncontrolledEditor>
    );
  } else if (props.dialogComponentName == "addCatagoryComponent") {
    return (
      <AddCatagory save={props.saveBtn} dispatch={props.dispatch}></AddCatagory>
    );
  } else {
    return <div>Something went wrong</div>;
  }
}
