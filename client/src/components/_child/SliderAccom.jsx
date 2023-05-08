import React, { Component } from "react";
import Slider from "react-slick";

import accom1 from "../../assets/images/accom-sm-1.jpg";
import accom2 from "../../assets/images/accom-sm-2.jpg";
import accom3 from "../../assets/images/accom-sm-3.jpg";
import accom4 from "../../assets/images/accom-sm-4.jpg";

export default class SliderAccom extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={accom`${i + 1}`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img src={accom1} />
          </div>
          <div>
            <img src={accom2} />
          </div>
          <div>
            <img src={accom3} />
          </div>
          <div>
            <img src={accom4} />
          </div>
        </Slider>
      </div>
    );
  }
}

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// export default class SliderAccom extends Component {
//   render() {
//     const settings = {
//       infinite: true,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//     };

//     return (
//       <div className="slider-container">
//         <Slider {...settings}>
//           <div className="slider-item">
//             <a href="#">
//               <div className="slider-item-img">
//                 <img src={accom1} alt="" />
//               </div>
//               <div className="desc">
//                 <p>double room</p>
//               </div>
//             </a>
//           </div>
          
//           <div className="slider-item">
//             <a href="#">
//               <div className="slider-item-img">
//                 <img src={accom2} alt="" />
//               </div>
//               <div className="desc">
//                 <p>triple room</p>
//                 <span>3 bed</span>
//               </div>
//             </a>
//           </div>
          
//           <div className="slider-item">
//             <a href="#">
//               <div className="slider-item-img">
//                 <img src={accom3} alt="" />
//               </div>
//               <div className="desc">
//                 <p>triple room</p>
//                 <span>2 bed</span>
//               </div>
//             </a>
//           </div>
          
//           <div className="slider-item">
//             <a href="#">
//               <div className="slider-item-img">
//                 <img src={accom4} alt="" />
//               </div>
//               <div className="desc">
//                 <p>dorm room</p>
//               </div>
//             </a>
//           </div>
          
//           <div className="slider-item">
//             <a href="#">
//               <div className="slider-item-img">
//                 <img src={accom2} alt="" />
//               </div>
//               <div className="desc">
//                 <p>triple room</p>
//                 <span>3 bed</span>
//               </div>
//             </a>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

