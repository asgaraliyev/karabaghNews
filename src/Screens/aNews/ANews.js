import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import ANewsContainer from "../../Components/aNewsContainer/aNewsContainer";
import { Typography } from "@material-ui/core";
import "./scss/style.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useMediaQuery } from "react-responsive";
import Trending from "../../Components/Trending/Trending";
import OtherNews from "../../Components/OtherNews/OtherNews";
import GettingAPosts from "../../Functions/GettingAPosts";
import GettingPosts from "../../Functions/GettingPosts";
export default function ANews() {
  var { newsName } = useParams();
  const moreThansixhundred = useMediaQuery({ query: "(min-width: 600px)" });
  const moreThanOneThousand = useMediaQuery({ query: "(min-width: 1000px)" });
  var widthOfNewsContainer,
    heightofNewsContainer,
    widthOfYouTubeVideo = "80vw",
    heightOfYouTubeVideo = "40vw";
  if (moreThanOneThousand) {
    widthOfYouTubeVideo = "40vw";
    heightOfYouTubeVideo = "20vw";
    widthOfNewsContainer = true;
  } else if (moreThansixhundred) {
    widthOfYouTubeVideo = "60vw";
    heightOfYouTubeVideo = "30vw";
    widthOfNewsContainer = true;
  } else {
    heightofNewsContainer = true;
  }
  var thePost = {
    data: {
      key: "Loading...",
      author: "",
      body: "",
      catagory: "",
      image:
        "https://i.pinimg.com/originals/1a/e0/90/1ae090fce667925b01954c2eb72308b6.gif",
      time: "",
      title: "Loading..",
      link: "",
    },
    date: null,
  };

  const [theNews, setTheNews] = useState(thePost);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    console.log("worked");
    GettingPosts().then((posts) => {
      posts.map((post) => {
        if (post.data.link === newsName) {
          setTheNews(post);
          var allRelatedPosts = [];
          posts.map((altPost) => {
            if (altPost.data.catagory === post.data.catagory) {
              allRelatedPosts.push(altPost);
            }
          });
          setRelatedPosts(allRelatedPosts)
        }
      });
    });
  }, [newsName]);

  return (
    <div id="a-news">
      <Header
        info={{
          type: "anews",
          title: theNews.data.catagory,
          classNamee: "zIndex",
          lightContent: true,
        }}
      ></Header>
      <div id="main-news">
        <div className="expand">
          <div className="image-side">
            <ANewsContainer
              height={heightofNewsContainer}
              width={widthOfNewsContainer}
              content={false}
              imageLink={theNews.data.image}
            ></ANewsContainer>
            <div className="curtain"></div>
          </div>
          <div className="news-content-side">
            <div className="to-top">
              <div className="to-expand">
                <h2>{theNews.data.title}</h2>
                <br></br>
                <Typography>
                  <div
                    dangerouslySetInnerHTML={{ __html: `${theNews.data.body}` }}
                  ></div>
                </Typography>
                <br></br>
                {/* <ReactPlayer
                  url="https://youtu.be/wB80aA3hnEM"
                  width={widthOfYouTubeVideo}
                  height={heightOfYouTubeVideo}
                />
                <br></br>

                <Typography>
                  "And then it turned into the very hot period, and in 1992
                  Khojaly genocide was committed against Azerbaijani civilians.
                  Elderly people, women, kids, babies were killed, maimed and
                  taken hostages, and the fate of most of them are still not
                  known until today," he said.
                </Typography> */}
                <br></br>
                <div id="social-media-for-a-post">
                  <h3>Share this post</h3>
                  <br></br>
                  <div className="socials">
                    <div className="social facebook">
                      <span className="icon">
                        <FacebookIcon></FacebookIcon>
                      </span>
                      <span className="the-text">Facebook</span>
                    </div>
                    <div className="social twitter">
                      <span className="icon">
                        <TwitterIcon></TwitterIcon>
                      </span>
                      <span className="the-text">Twitter</span>
                    </div>
                    <div className="social instagram">
                      <span className="icon">
                        <InstagramIcon></InstagramIcon>
                      </span>
                      <span className="the-text">Instagram</span>
                    </div>
                  </div>
                  <br></br>
                  <h3>Related Posts</h3>
                  <Trending posts={relatedPosts}></Trending>
                  <OtherNews posts={relatedPosts}></OtherNews>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
