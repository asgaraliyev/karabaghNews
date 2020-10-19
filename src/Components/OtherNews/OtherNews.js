import React, { Component } from "react";
import "./scss/style.scss";
import ImageComponent from "./Components/ImageComponent";
import Content from "./Components/Content";
import { Link } from "react-router-dom";
export default class OtherNews extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div id="other-news">
        <div className="child-other-news">
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.data.link}>
                  <Link to={`/news/${post.data.link}`}>
                    <article>
                      <ImageComponent image={post.data.image}></ImageComponent>
                      <Content
                        title={post.data.title}
                        body={post.data.body}
                        time={post.date}
                      ></Content>
                    </article>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
