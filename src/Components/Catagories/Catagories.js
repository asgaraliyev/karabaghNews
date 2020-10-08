import React, { Component } from "react";
import Slider from "react-slick";
import "./scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Catagories extends Component {
  render() {
    const Slider_Settings = {
      dost: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div id="slider">
        <br></br>
        <Slider {...Slider_Settings}>
          <div className="slider-item">
            <h3 className="title">World</h3>
          </div>
          <div className="slider-item">
            <h3 className="title">Business</h3>
          </div>
          <div className="slider-item">
            <h3 className="title">Sport</h3>
          </div>
          <div className="slider-item">
            <h3 className="title">Politics</h3>
          </div>
          <div className="slider-item">
            <h3 className="title">Economy</h3>
          </div>
          <div className="slider-item">
            <h3 className="title">Tech</h3>
          </div>
          <div className="slider-item">
            <h3 className="title">Science</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
