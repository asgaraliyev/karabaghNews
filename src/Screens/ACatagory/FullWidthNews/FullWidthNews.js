import React, { Component, useState } from "react";
import Image from "material-ui-image";
import ANewsContainer from "../../../Components/aNewsContainer/aNewsContainer";
export default class FullWidthNews extends Component {

  render() {
    const { width, height, imageLink, title, time } = this.props;
    return (
      <div className="catagory-news">
        <ANewsContainer
          title={title}
          time={time}
          width={width}
          height={height}
          imageLink={imageLink}
        ></ANewsContainer>
      </div>
    );
  }
}