import React from "react";
import { useDispatch } from "react-redux";
import { change_Dialog_Content_Action } from "../../../../../Redux/Actions/index";
import {Button } from "antd";
export default function PostButtons() {
  const dispatch = useDispatch();

  function addPostComponent() {
    // dispatch(change_Dashboard_Contente_action("addpost"));
    var info = {
      data: {
        isDialogOpen: true,
        dialogComponentName: "addPostComponent",
      },
    };
    dispatch(change_Dialog_Content_Action(info));
  }
  return (
    <>
      <Button onClick={addPostComponent}>Add Post</Button>
    </>
  );
}
