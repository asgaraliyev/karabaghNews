import React, { Component } from "react";
import Slider from "react-slick";
import "./scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
export default function Catagories() {
  const catagories = useSelector((state) => state.catagories);
  const Slider_Settings = {
    dost: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    rtl: true,
  };
  function catagory_Changed(catalog) {
    window.location.href = window.location.href + "catagory/" + catalog;
  }
  return (
    <div id="slider">
      <br></br>
      <Slider {...Slider_Settings}>
        {catagories.map((catalog) => {
          return (
            <div className="slider-item">
              <h3
                className="title"
                data-target-catagory={catalog}
                key={catalog}
                onMouseUp={() => catagory_Changed(catalog)}
              >
                {catalog}
              </h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
