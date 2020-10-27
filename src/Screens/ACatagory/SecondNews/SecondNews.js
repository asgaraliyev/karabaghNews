import React, { Component } from "react";
import ANewsContainer from "../../../Components/aNewsContainer/aNewsContainer";
import { Link } from "react-router-dom";
export default class SecondNews extends Component {
  render() {
    const { posts } = this.props;
    return (
      <>
        {posts !== null ? (
          <div id="second-news">
            <div className="container">
              <div className="left side">
                <Link to={`/news/${posts[0].data.link}`}>
                  <ANewsContainer
                    title={posts[0].data.title}
                    time={posts[0].date}
                    imageLink={posts[0].data.image}
                  ></ANewsContainer>
                </Link>
              </div>
              <div className="right side">
                <div className="right-side top">
                  <Link to={`/news/${posts[1].data.link}`}>
                    <ANewsContainer
                      title={posts[1].data.title}
                      time={posts[1].date}
                      imageLink={posts[1].data.image}
                    ></ANewsContainer>
                  </Link>
                </div>
                <div className="right-side bottom">
                  <Link to={`/news/${posts[2].data.link}`}>
                    <ANewsContainer
                      title={posts[2].data.title}
                      time={posts[2].date}
                      imageLink={posts[2].data.image}
                    ></ANewsContainer>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
