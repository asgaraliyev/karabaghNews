import React, { Component } from "react";
import Image from "material-ui-image";
import ANewsContainer from "../../../Components/aNewsContainer/aNewsContainer";
export default class SecondNews extends Component {
  render() {
    return (
      <div id="second-news">
        <div className="container">
          <div className="left side">
            <ANewsContainer
              title="Cupidatat ullamco duis do dolore nulla."
              time="2 hours ago"
              imageLink="https://cdn.cnn.com/cnnnext/dam/assets/201011210126-03-nba-finals-1011-large-tease.jpg"
            ></ANewsContainer>
          </div>
          <div className="right side">
            <div className="right-side top">
              <ANewsContainer
                title="Cupidatat ullamco duis do dolore nulla."
                time="2 hours ago"
                imageLink="https://www.chinadaily.com.cn/photo/images/attachement/jpg/site1/20170918/d8cb8a5155b01b297c550d.jpg"
              ></ANewsContainer>
            </div>
            <div className="right-side bottom">
              <ANewsContainer
              // title="Cupidatat ullamco duis do dolore nulla."
              // time="2 hours ago"
              // imageLink="https://www.paralympic.org/sites/default/files/styles/image_crop_16_9_800_450/public/2020-10/GettyImages-1173826669.jpg?itok=TXgTQOsX"
              ></ANewsContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
