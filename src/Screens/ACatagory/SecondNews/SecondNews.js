import React, { Component } from "react";

export default class SecondNews extends Component {
  render() {
    return (
      <div id="second-news">
        <div className="container">
          <div className="left side"><div className="news-container"></div></div>
          <div className="right side">
            <div className="right-side top"><div className="news-container"></div></div>
            <div className="right-side bottom"><div className="news-container"></div></div>
          </div>
        </div>
      </div>
    );
  }
}
