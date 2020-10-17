import React from "react";
import { useDispatch } from "react-redux";
import { change_Dashboard_Contente_action } from "../../../../../Redux/Actions/index";
export default function PostButtons() {
  const dispatch = useDispatch();

  function addPostComponent() {
    dispatch(change_Dashboard_Contente_action("addpost"))
  }
  return (
    <>
      <button onClick={addPostComponent}>Add Post</button>
    </>
  );
}
