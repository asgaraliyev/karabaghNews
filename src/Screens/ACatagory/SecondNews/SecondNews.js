import React, { Component } from "react";
import Image from "material-ui-image";
import ANewsContainer from "../../../Components/aNewsContainer/aNewsContainer";
export default class SecondNews extends Component {
  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <>
        {posts !== null ? (
          <div id="second-news">
            <div className="container">
              <div className="left side">
                <ANewsContainer
                  title={posts[0].data.title}
                  time={posts[0].date}
                  imageLink={posts[0].data.image}
                ></ANewsContainer>
              </div>
              <div className="right side">
                <div className="right-side top">
                  <ANewsContainer
                    title={posts[1].data.title}
                    time={posts[1].date}
                    imageLink={posts[1].data.image}
                  ></ANewsContainer>
                </div>
                <div className="right-side bottom">
                  <ANewsContainer
                    title={posts[2].data.title}
                    time={posts[2].date}
                    imageLink={posts[2].data.image}
                  ></ANewsContainer>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
