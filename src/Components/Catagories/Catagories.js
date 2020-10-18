import React, { Component } from "react";
import Slider from "react-slick";
import "./scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {change_The_Link} from '../../Config/ChangingLink/ChangeLink'
import { useSelector, useDispatch } from "react-redux";

export default function Catagories() {
  const catagories = useSelector((state) => state.catagories);
  const Slider_Settings = {
    dost: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  function catagory_Changed(catalog) {
    const theLinkWillBe = window.location.origin + "/catagory/" + catalog;
    change_The_Link(theLinkWillBe)
  }
 
  return (
    <div id="slider">
      <br></br>
      <Slider {...Slider_Settings}>
        {catagories.map((catalog) => {
          return (
            <div className="slider-item" key={catalog}>
              <h3
                className="title"
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
