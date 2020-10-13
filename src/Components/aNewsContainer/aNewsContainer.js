import React, { Component } from "react";
import "./scss/style.scss";
import Image from "material-ui-image";
import { PropTypes } from "prop-types";

export default class ANewsContainer extends Component {
  render() {
    const { width, height, imageLink, title, time, content } = this.props;
    var widthOrHeight;
    if (width) {
      widthOrHeight = "for-width";
    } else if (height) {
      widthOrHeight = "for-height";
    } else {
      widthOrHeight = "for-height";
    }

    return (
      <div className="news-container">
        <div className={`image-container ${widthOrHeight}`}>
          <Image src={imageLink}></Image>
        </div>
        {content && (
          <div className="content-container">
            <div className="content">
              <h5>{title}</h5>
              <p>{time}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

ANewsContainer.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  imageLink: PropTypes.string,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
};
ANewsContainer.defaultProps = {
  title: "The title of this news did not typed",
  time: "The time of this news did not typed",
  imageLink:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYrbT4C-b0UceJVk4Szi4NVBKxXC517hGb3Q&usqp=CAU",
  content: true,
};
