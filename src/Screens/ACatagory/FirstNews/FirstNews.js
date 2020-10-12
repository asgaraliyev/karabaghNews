import React, { Component, useState } from "react";
import Image from "material-ui-image";

export default class FirstNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoLink:
        "https://www.paralympic.org/sites/default/files/styles/image_crop_16_9_800_450/public/2020-10/GettyImages-1173826669.jpg?itok=TXgTQOsX",
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div id="fist-catagory-news">
        <div className="containter">
          <div className="image-container">
            <Image src={this.state.photoLink}></Image>
          </div>
          <div className="content-container">text</div>
        </div>
      </div>
    );
  }
}
