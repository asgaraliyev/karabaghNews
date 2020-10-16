import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import ANewsContainer from "../../Components/aNewsContainer/aNewsContainer";
import { Typography } from "@material-ui/core";
import "./scss/style.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
import Trending from "../../Components/Trending/Trending";
export default function ANews() {
  var { newsName } = useParams();
  const moreThansixhundred = useMediaQuery({ query: "(min-width: 600px)" });
  const moreThanOneThousand = useMediaQuery({ query: "(min-width: 1000px)" });
  console.log("ANews -> moreThansixhundred", moreThansixhundred);
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

  return (
    <div id="a-news">
      <Header
        info={{
          type: "anews",
          title: "catagoryName",
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
              imageLink="https://jewishjournal.com/wp-content/uploads/2019/02/IMG_9311.jpg"
            ></ANewsContainer>
            <div className="curtain"></div>
          </div>
          <div className="news-content-side">
            <div className="to-top">
              <div className="to-expand">
                <h2>‘Khojaly genocide one of darkest pages in 20th century’</h2>
                <br></br>
                <Typography>
                  Armenians who lived side-by-side with Azerbaijanis, turned
                  against neighbors, committed 'genocide', says Azerbaijani
                  envoy The "genocide" committed in 1992 against hundreds of
                  Azerbaijanis by Armenians was one of the darkest pages in the
                  history of the 20th century, Azerbaijan’s envoy to Turkey
                  said. Marking the 28th anniversary of the Khojaly Massacre,
                  Khazar Ibrahim, in an interview with Anadolu Agency, said that
                  the tragedy happened during the military aggression of Armenia
                  against Azerbaijan, which started in the late 1980s in the
                  final stages of the USSR.
                </Typography>
                <br></br>
                <ReactPlayer
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
                </Typography>
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
                  <Trending></Trending>
                  <Trending></Trending>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
