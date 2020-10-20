import React, { Component, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FullWidthNews from "./FullWidthNews/FullWidthNews";
import "./scss/style.scss";
import SecondNews from "./SecondNews/SecondNews";
import Trending from "../../Components/Trending/Trending";
import OtherNews from "../../Components/OtherNews/OtherNews";
import { change_Catagories } from "../../Redux/Actions/";
import GettingCatagories from "../../Functions/GettingCatagories";
import GettingCatagoryPosts from "../../Functions/GettingCatagoryPosts";

export default function ACatagory() {
  const catagories = useSelector((state) => state.catagories);
  const [cPosts, setCPosts] = useState([]);
  var { catagoryName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    GettingCatagories().then((result) => {
      dispatch(change_Catagories(result));
      if (!catagories.includes(catagoryName)) {
        catagoryName = catagories[0];
      }
    });
    GettingCatagoryPosts(catagoryName).then((cPosts) => {
      setCPosts(cPosts);
    });
  }, []);

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
      <Trending posts={cPosts}></Trending>

      <br></br>
      <br></br>
      <OtherNews posts={cPosts}></OtherNews>
    </div>
  );
}
