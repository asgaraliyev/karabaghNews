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
import { Avatar } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ReactTimeAgo from "react-time-ago";
import Loader from "../../Images/loader.webp";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
ReactGA.initialize("G-250509579");
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
      image: Loader,
      time: "",
      title: "Loading..",
      link: "",
    },
    date: null,
  };

  const [theNews, setTheNews] = useState(thePost);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    GettingPosts().then((posts) => {
      var isNewsFound = false;
      posts.map((post) => {
        if (post.data.link === newsName) {
          isNewsFound = true;
          setTheNews(post);

          document.title = post.data.title;
          document
            .querySelector('meta[name="title"]')
            .setAttribute("content", post.data.title);
          var keywords = post.data.title;
          keywords = keywords.toLowerCase();
          keywords = keywords.replace("-", " ").split(" ");
          var listOfKeywords = [];
          keywords.map(function (keyword) {
            listOfKeywords.push(keyword + ",");
          });

          document
            .querySelector('meta[name="keywords"]')
            .setAttribute("content", keywords);
          document
            .querySelector('meta[name="description"]')
            .setAttribute("content", post.data.title);
          ReactGA.pageview(window.location.pathname);
          var allRelatedPosts = [];
          posts.map((altPost) => {
            if (altPost.data.catagory === post.data.catagory) {
              allRelatedPosts.push(altPost);
            }
          });
          setRelatedPosts(allRelatedPosts);
        }
      });
      if (!isNewsFound) {
        const history = createBrowserHistory();
        history.push("/NotFound");
        this.forceUpdate();
      }
    });
  }, [newsName]);
  console.log(theNews.date, "sea");
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
            <div className="curtain">
              <div className="post-info">
                <div className="author-sec">
                  <span>
                    <div className="avatar-borders">
                      {theNews.date !== null ? (
                        <Avatar
                          alt={theNews.data.author}
                          src={theNews.data.author}
                        ></Avatar>
                      ) : null}
                    </div>
                  </span>
                  <span>{theNews.data.author}</span>
                </div>
                <div className="time-sec">
                  <span>
                    {theNews.date !== null ? (
                      <ReactTimeAgo
                        date={theNews.date}
                        locale="az-Az"
                        timeStyle="round"
                      ></ReactTimeAgo>
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="news-content-side">
            <div className="to-top">
              <div className="to-expand" id="a-news-content">
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
                {theNews.date !== null ? (
                  <div id="social-media-for-a-post">
                    <h3>Share this post</h3>
                    <br></br>
                    <div className="socials">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/news/${theNews.data.link}`}
                        className="social facebook "
                        data-href={`${window.location.origin}/news/${theNews.data.link}`}
                        data-layout="button"
                        data-size="small"
                      >
                        <span className="icon">
                          <FacebookIcon></FacebookIcon>
                        </span>
                        <span className="the-text">Facebook</span>
                      </a>
                      <a
                        className="social twitter"
                        title="Share on twitter"
                        href={`https://twitter.com/intent/tweet?url=${window.location.origin}/news/${theNews.data.link}`}
                        rel="noopener"
                      >
                        <span className="icon">
                          <TwitterIcon></TwitterIcon>
                        </span>
                        <span className="the-text">Twitter</span>
                      </a>
                      <a
                        className="social whatsapp"
                        href={`whatsapp://send?text=${window.location.origin}/news/${theNews.data.link}`}
                        data-action="share/whatsapp/share"
                      >
                        <span className="icon">
                          <WhatsAppIcon></WhatsAppIcon>
                        </span>
                        <span className="the-text">Whatsapp</span>
                      </a>
                    </div>
                    <br></br>
                    <h3>Related Posts</h3>
                    <Trending posts={relatedPosts}></Trending>
                    <OtherNews posts={relatedPosts}></OtherNews>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
