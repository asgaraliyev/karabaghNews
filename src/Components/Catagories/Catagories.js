import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import "./scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import GettingCatagories from "../../Functions/GettingCatagories";
import { change_Catagories } from "../../Redux/Actions/";


import { Link } from "react-router-dom";
export default function Catagories() {
  const catagoriesRedux = useSelector((state) => state.catagories);
  const dispatch = useDispatch();
  useEffect(() => {
    GettingCatagories().then((result) => {
      dispatch(change_Catagories(result));
    });
  }, []);
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
  }

  return (
    <div id="slider">
      <br></br>
      <Slider {...Slider_Settings}>
        {catagoriesRedux.map((catalog) => {
          return (
            <div className="slider-item" key={catalog}>
              <Link to={`/catagory/${catalog}`}>
                <h3
                  className="title"
                  key={catalog}
                  onClick={() => catagory_Changed(catalog)}
                >
                  {catalog}
                </h3>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
