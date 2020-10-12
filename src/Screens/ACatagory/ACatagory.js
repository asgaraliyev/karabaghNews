import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FirstNews from "./FirstNews/FirstNews";
import "./scss/style.scss";
import SecondNews from "./SecondNews/SecondNews";
export default function ACatagory() {
  const catagories = useSelector((state) => state.catagories);
  var { catagoryName } = useParams();
  if (!catagories.includes(catagoryName)) {
    catagoryName=catagories[0]
  } 
  return (
    <div>
      <Header
        info={{
          type: "catagory",
          title: catagoryName,
        }}
      ></Header>
      <FirstNews></FirstNews>
      <br></br>
      <br></br>
      <SecondNews></SecondNews>
    </div>
  );
}
