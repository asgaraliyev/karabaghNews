import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scss/style.scss";
import Image from "material-ui-image";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";
export default class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
    };
  }

  render() {
    const Slider_Settings = {
      dost: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 470,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    };
    var { posts } = this.props;
    var totalNumber = 0;
    posts.map((post) => {
      totalNumber += post.data.views;
    });
    var avaragePopulation = totalNumber / posts.length;
    var allTrendingPosts = [];
    posts.map((post) => {
      if (post.data.views > avaragePopulation) {
        allTrendingPosts.push(post);
        posts = allTrendingPosts;
      }
    });

    return (
      <div id="trending-slider">
        <br></br>
        <Slider {...Slider_Settings}>
          {posts.map((post) => {
            return (
              <div className="parent-card-item" key={post.data.link}>
                <Link to={`/news/${post.data.link}`}>
                  {" "}
                  <div className="card-item">
                    <div className="image-container">
                      <Image alt={post.data.link} src={post.data.image} />
                    </div>
                    <div className="info">
                      <div className="info-container">
                        <span className="news-title">{post.data.title}</span>
                        <br></br>
                        <span className="time">
                          <ReactTimeAgo
                            date={post.date}
                            locale="az-Az"
                            timeStyle="round"
                          ></ReactTimeAgo>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
