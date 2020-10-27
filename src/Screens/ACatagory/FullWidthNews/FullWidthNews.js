import React, { Component, useState } from "react";
import Image from "material-ui-image";
import { Link } from "react-router-dom";
import ANewsContainer from "../../../Components/aNewsContainer/aNewsContainer";
export default class FullWidthNews extends Component {
  render() {
    const { width, height, imageLink, title, link, time } = this.props;
    return (
      <div className="catagory-news">
        <Link to={`/news/${link}`}>
          <ANewsContainer
            title={title}
            time={time}
            width={width}
            height={height}
            imageLink={imageLink}
          ></ANewsContainer>
        </Link>
      </div>
    );
  }
}
