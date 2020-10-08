import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scss/style.scss";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
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
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
};
export default function Authors() {
  const classes = useStyles();
  const profilePhotoLink =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSStFBcu6lA7SmRZSdtUXP7dfRTcwPfSbyj4A&usqp=CAU";
  return (
    <div id="authors-slider">
      <Slider {...Slider_Settings}>
        <div className="author">
          <span className="profile-photo">
            <div className={classes.root}>
              <Avatar
                alt="Remy Sharp"
                src={profilePhotoLink}
                className={classes.large}
              />
            </div>
          </span>
          <span>
            <p>David Brooks</p>
            <h5>Artificial Intelligence Can Save Your Life </h5>
            <p>Jube 24, 2019</p>
          </span>
        </div>
        <div className="author">
          <span className="profile-photo">
            <div className={classes.root}>
              <Avatar
                alt="Remy Sharp"
                src={profilePhotoLink}
                className={classes.large}
              />
            </div>
          </span>
          <span>
            <p>David Brooks</p>
            <h5>Artificial Intelligence Can Save Your Life </h5>
            <p>Jube 24, 2019</p>
          </span>
        </div>
        <div className="author">
          <span className="profile-photo">
            <div className={classes.root}>
              <Avatar
                alt="Remy Sharp"
                src={profilePhotoLink}
                className={classes.large}
              />
            </div>
          </span>
          <span>
            <p>David Brooks</p>
            <h5>Artificial Intelligence Can Save Your Life </h5>
            <p>Jube 24, 2019</p>
          </span>
        </div>
      </Slider>
    </div>
  );
}
