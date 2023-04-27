import { useState, useEffect } from "react";
import SliderAccom from "../components/_child/SliderAccom";
import { Link } from "react-router-dom";
import Banner from "../components/_child/Banner";

import bannerAboutUs from "../assets/images/banner-about-us.jpg";
import bgTitle from "../assets/images/bg-tit.png";
import bgFrame from "../assets/images/bg-frs.png";
import accomSlide1 from "../assets/images/accom-slide-1.jpg";
import bgReadmore from "../assets/images/bg-read-m.png";

import newRequest from "../utils/NewRequest";

const bigItemTextContent = {
  textTransform: "uppercase",
  display: "inline-block",
  fontWeight: "bold",
  fontSize: "28px",
  lineHeight: "24px",
  position: "relative",
  background: bgReadmore,
  backgroundSize: "100% auto",
  backgroundPosition: "bottom",
  color: "#000",
  textDecoration: "none",
};

const readMore = {
  textTransform: "uppercase",
  display: "inline-block",
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "24px",
  position: "relative",
  background: bgReadmore,
  backgroundSize: "100% auto",
  backgroundPosition: "bottom",
  color: "#000",
  textDecoration: "none",
};

const Accommodation = () => {
  const folder = "banner/accommodation";
  const [imgBanner, setImgBanner] = useState("");

  useEffect(() => {
    newRequest.get(`image/?folder=${folder}`).then((res) => {
      setImgBanner(res.data.url);
    });
  }, []);

  return (
    <div>
      {imgBanner && <Banner img={imgBanner} text="accommodation" />}
      <div className="container">
        <div className="slider-box">
          <div className="big-item">
            <div className="big-item-content">
              <div className="big-item-img">
                <img src={accomSlide1} alt="" />
              </div>
              <div className="big-item-text">
                <div className="big-item-text-content">
                  <h3>
                    <Link to={"#"} style={bigItemTextContent}>
                      double room
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam soluta repudiandae iusto suscipit explicabo
                    voluptatem odit ratione sint, non ullam, distinctio veniam.
                    Et ex vel aut dicta? Corporis, nam quo?
                  </p>
                  <div className="read-more">
                    <Link to={"#"} style={readMore}>
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SliderAccom />
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
