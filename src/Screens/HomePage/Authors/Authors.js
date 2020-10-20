import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scss/style.scss";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const Slider_Settings = {
  dost: false,
  infinite: true,
  speed: 3000,
  slidesToScroll: 1,
  slidesToShow: 3,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 13000,
  pauseOnHover: true,
  rtl: true,
  responsive: [
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};
export default function Authors({ posts }) {
  const classes = useStyles();
  const profilePhotoLink =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSStFBcu6lA7SmRZSdtUXP7dfRTcwPfSbyj4A&usqp=CAU";

  return (
    <div id="authors-slider">
      <Slider {...Slider_Settings}>
        {posts.map((post) => {
          if (post.data.isAuthor) {
            console.log("Authors -> post", post);
            return (
              <div className="author">
                <Link to={`/news/${post.data.link}`}>
                  <span className="profile-photo">
                    <div className={classes.root}>
                      <Avatar
                        alt={post.data.author}
                        src={post.data.image}
                        className={classes.large}
                      />
                    </div>
                  </span>
                  <span>
                    <p>{post.data.author}</p>
                    <h5>{post.data.title}</h5>
                    <ReactTimeAgo
                      date={post.date}
                      locale="az-Az"
                      timeStyle="round"
                    ></ReactTimeAgo>
                  </span>
                </Link>
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
}
