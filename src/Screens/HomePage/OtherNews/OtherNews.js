import React, { Component } from "react";
import "./scss/style.scss";
import ImageComponent from "./Components/ImageComponent";
import Content from "./Components/Content";
export default class OtherNews extends Component {
  render() {
    return (
      <div id="other-news">
        <div className="child-other-news">
          <ul>
            <li>
              <article>
                <ImageComponent></ImageComponent>
                <Content></Content>
              </article>
            </li>
            <li>
              <article>
                <ImageComponent></ImageComponent>
                <Content></Content>
              </article>
            </li>
            <li>
              <article>
                <ImageComponent></ImageComponent>
                <Content></Content>
              </article>
            </li>
            <li>
              <article>
                <ImageComponent></ImageComponent>
                <Content></Content>
              </article>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
