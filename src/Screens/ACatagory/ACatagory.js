import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FullWidthNews from "./FullWidthNews/FullWidthNews";
import "./scss/style.scss";
import SecondNews from "./SecondNews/SecondNews";
import Trending from "../../Components/Trending/Trending";
import OtherNews from "../../Components/OtherNews/OtherNews";
export default function ACatagory() {
  const catagories = useSelector((state) => state.catagories);
  var { catagoryName } = useParams();
  if (!catagories.includes(catagoryName)) {
    catagoryName = catagories[0];
  }
  return (
    <div>
      <Header
        info={{
          type: "catagory",
          title: catagoryName,
        }}
      ></Header>
      <div id="second-responsive-div">
        <div id="responsive-div">
          <FullWidthNews
            title="sea"
            time="2 horuse ago"
            width={true}
            imageLink="https://www.paralympic.org/sites/default/files/styles/image_crop_16_9_800_450/public/2020-10/GettyImages-1173826669.jpg?itok=TXgTQOsX"
          ></FullWidthNews>

          <SecondNews></SecondNews>
        </div>
        <FullWidthNews
          title="sea"
          time="2 horuse ago"
          width={true}
          imageLink="https://www.paralympic.org/sites/default/files/styles/image_crop_16_9_800_450/public/2020-10/GettyImages-1173826669.jpg?itok=TXgTQOsX"
        ></FullWidthNews>
      </div>

      <br></br>
      <br></br>
      <Trending></Trending>

      <br></br>
      <br></br>
      <OtherNews></OtherNews>
    </div>
  );
}
