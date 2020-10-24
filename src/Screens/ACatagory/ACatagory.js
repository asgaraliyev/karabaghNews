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
  const [trendingPosts, setTrending] = useState([]);
  const [otherNewsPosts, setOtherNews] = useState([]);
  const [fullWidthPostOne, setFullWidthPostOne] = useState(null);
  const [fullWidthPostTwo, setFullWidthPostTwo] = useState(null);
  const [secondNewsContainer, setsecondNewsContainer] = useState(null);
  var { catagoryName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    GettingCatagories().then((result) => {
      dispatch(change_Catagories(result));
      if (!catagories.includes(catagoryName)) {
        catagoryName = catagories[0];
      }
    });
    GettingCatagoryPosts(catagoryName).then((posts) => {
      setCPosts(posts);
      posts.sort(function (a, b) {
        return b.data.time.seconds - a.data.time.seconds;
      });
      if (posts[0]) {
        setFullWidthPostOne(posts[0]);
      }
      if (posts[1]) {
        setFullWidthPostTwo(posts[1]);
      }
      if (posts[2] && posts[3] && posts[4]) {
        setsecondNewsContainer([posts[2], posts[3], posts[4]]);
      }
      if (posts[5] && posts[6] && posts[7] && posts[8] && posts[9] && posts[10]) {
        setTrending([posts[5] , posts[6], posts[7] , posts[8] , posts[9] , posts[10]]);
      }
      posts = posts.slice(10, posts.length);
      setOtherNews(posts)
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
          {fullWidthPostOne !== null ? (
            <FullWidthNews
              title={fullWidthPostOne.data.title}
              time={fullWidthPostOne.date}
              width={true}
              imageLink={fullWidthPostOne.data.image}
            ></FullWidthNews>
          ) : null}
          {secondNewsContainer !== null ? (
            <SecondNews posts={secondNewsContainer}></SecondNews>
          ) : null}
        </div>
        {fullWidthPostTwo !== null ? (
          <FullWidthNews
            title={fullWidthPostTwo.data.title}
            time={fullWidthPostTwo.date}
            width={true}
            imageLink={fullWidthPostTwo.data.image}
          ></FullWidthNews>
        ) : null}
      </div>

      <br></br>
      <br></br>
      <Trending posts={trendingPosts}></Trending>

      <br></br>
      <br></br>
      <OtherNews posts={otherNewsPosts}></OtherNews>
    </div>
  );
}
