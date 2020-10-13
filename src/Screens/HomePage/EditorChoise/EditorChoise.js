import React, { Component } from "react";
import "./scss/style.scss";
import Image from "material-ui-image";
import { makeStyles } from "@material-ui/core/styles";
import MedalIcon from "../../../Icons/MedalIcon";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ANewsContainer from '../../../Components/aNewsContainer/aNewsContainer'
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
export default function EditorChoise() {
  const classes = useStyles();
  const newsPhoto =
    "https://res.cloudinary.com/https-www-isango-com/image/upload/f_auto/t_m_Prod/v7682/middle%20east/uae/dubai/13233.jpg";
  const avatarPhoto =
    "https://pm1.narvii.com/6310/b40b659a7a5a6ba79fe648749c050b0e76ffff5d_128.jpg";
  return (
    <div id="editor-choise">
      <div className="photo side">
       <ANewsContainer width={true} content={false}></ANewsContainer>
      </div>
      <div className="content side">
        <div>
          <MedalIcon
            info={{ classNamee: "", fill: "", width: "20px", height: "20px" }}
          ></MedalIcon>
          <p className="editor-choice">Editor Choice</p>
        </div>
        <br></br>
        <div>
          <h4 className="title">Ad veniam commodo veniam officia et magna.</h4>
          <br></br>
          <p className="description">
            Lorem officia quis aute pariatur ad ullamco id reprehenderit
            do.Ipsum reprehenderit voluptate ipsum non nostrud aliqua quis
            consectetur.
          </p>
        </div>
        <br></br>
        <div className="about-author">
          <span className="display-inline-block">
            <Avatar
              alt="Remy Sharp"
              src={avatarPhoto}
              className={classes.small}
            />
          </span>
          <span  className="display-inline-block">
            <p className="profile-title">Zohaib Anjum</p>
          </span>
          <span  className="display-inline-block icon">
            <MoreHorizIcon ></MoreHorizIcon>
          </span>
        </div>
      </div>
    </div>
  );
}
