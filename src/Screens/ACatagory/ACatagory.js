import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function ACatagory() {
  const catagories = useSelector((state) => state.catagories);
  const { catagoryName } = useParams();
  if (catagories.includes(catagoryName)) {
    return (
      <div>
        <Header
          info={{
            type: "catagory",
            title: catagoryName,
          }}
        ></Header>
      </div>
    );
  } else {
    return <></>;
  }
}
