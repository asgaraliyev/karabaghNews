import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FirstNews from "./FirstNews/FirstNews";
import './scss/style.scss'
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
        <FirstNews></FirstNews>
      </div>
    );
  } else {
    return <></>;
  }
}
