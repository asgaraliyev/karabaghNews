import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scss/style.scss";
import Image from 'material-ui-image';
export default class Trending extends Component {
  render() {
    const Slider_Settings = {
      dost: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay:true,
      autoplaySpeed: 9000,
      pauseOnHover:true,
    };
    const photoLink =
      "https://s.yimg.com/uu/api/res/1.2/dVm2lpdbEChZhim3GqC0YA--~B/aD0xMDA4O3c9MTYwMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/54d1b92531537142a9df2883bd95fbc/206536710/drones-ed.jpg";
    const items = [];
    for (var i = 0; i < 10; i++) {
      items.push(
        <div className="parent-card-item" key={i}>
          <div className="card-item">
            <div className="image-container">
              <Image src={photoLink} />
            </div>
            <div className="info">
              <div className="info-container">
                <span className="news-title">Drone Racing League is raising $50 milion</span>
                <br></br>
                <span className="time">2 hourse ago</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div id="trending-slider">
        <br></br>
        <Slider {...Slider_Settings}>{items}</Slider>
      </div>
    );
  }
}
// import React, { Component } from "react";
// import "./scss/style.scss";

// export default class Catagories extends Component {
//   render() {
//     return (
//       <div id="slider">
//         <br></br>
//         <Slider {...Slider_Settings}>
//           <div className="slider-item">
//             <h3 className="title">World</h3>
//           </div>
//           <div className="slider-item">
//             <h3 className="title">Business</h3>
//           </div>
//           <div className="slider-item">
//             <h3 className="title">Sport</h3>
//           </div>
//           <div className="slider-item">
//             <h3 className="title">Politics</h3>
//           </div>
//           <div className="slider-item">
//             <h3 className="title">Economy</h3>
//           </div>
//           <div className="slider-item">
//             <h3 className="title">Tech</h3>
//           </div>
//           <div className="slider-item">
//             <h3 className="title">Science</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
