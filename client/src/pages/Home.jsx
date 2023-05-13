import React from "react";
import { Link } from "react-router-dom";
import SimpleSlider from "../components/_child/Slider";
import SliderReview from "../components/_child/SliderReview";

// import images
import intro1 from '../assets/images/intro-1.jpg'
import intro2 from '../assets/images/intro-2.jpg'
import intro3 from '../assets/images/intro-3.jpg'
import introk from '../assets/images/icon/inrtro-k.png'
import travel1 from '../assets/images/travel-1.jpg'
import travel2 from '../assets/images/travel-2.jpg'
import travel3 from '../assets/images/travel-3.jpg'
import travel4 from '../assets/images/travel-4.jpg'
import travel5 from '../assets/images/travel-5.jpg'
import travel6 from '../assets/images/travel-6.jpg'
import foodres from '../assets/images/food-res.jpg'
import ser1 from '../assets/images/icon/ser-1.png'
import ser2 from '../assets/images/icon/ser-2.png'
import ser3 from '../assets/images/icon/ser-3.png'
import ser4 from '../assets/images/icon/ser-4.png'
import news1 from '../assets/images/news-1.jpg'
import news2 from '../assets/images/news-2.jpg'
import news3 from '../assets/images/news-3.jpg'

const inrtoItemTitle_H3_Link = {
  margin: "0",
  fontFamily: "UTM-Hanzel",
  fontSize: "22px",
  textAlign: "center",
  color: "#D7B659",
};

const readMoreLink = {
  fontWeight: "bold",
  color: "#000",
  fontSize: "14px",
  position: "relative",
  textTransform: "uppercase",
  hover: {
    transition: ".3s",
    color: "#fff",
  },
};

const Home = () => {
  return (
    <div className="home">
      <SimpleSlider />
      <div>
        {/* Introduce */}
        <section>
          <div className="introduce bg-sena">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3 col-sm-12">
                  <div className="intro-content">
                    <h2 className="intro-title">
                      Welcome to <br />
                      <b className="text-uppercase">cozynibi hotel</b>
                    </h2>
                    <p className="intro-text">
                      Thing lesser replenish evening called void a sea blessed
                      meat fourth called moveth place behold night own night
                      third in they’re abundant and don’t you’re the upon fruit.
                      Divided open divided appear also saw may fill. whales seed
                      creepeth. Open lessegether he also morning land i saw.
                    </p>
                    <Link className="read-more" to={"#"} style={readMoreLink}>
                      Read more
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-9">
                  <div className="list-intro row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="intro-item">
                        <img
                          src={intro1}
                          alt=""
                          className="intro-image"
                        />
                        <div className="intro-item-title text-uppercase">
                          <h3>
                            <Link style={inrtoItemTitle_H3_Link}>
                              Double room
                            </Link>
                          </h3>
                        </div>
                        <a href="#" className="intro-bgImage">
                          <img
                            src={introk}
                            alt="#"
                            className="w-100"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="intro-item">
                        <img
                          src={intro2}
                          alt=""
                          className="intro-image"
                        />
                        <div className="intro-item-title text-uppercase">
                          <h3>
                            <Link style={inrtoItemTitle_H3_Link}>
                              Triple room
                            </Link>
                          </h3>
                        </div>
                        <a href="#" className="intro-bgImage">
                          <img
                            src={introk}
                            alt="#"
                            className="w-100"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="intro-item">
                        <img
                          src={intro3}
                          alt=""
                          className="intro-image"
                        />
                        <div className="intro-item-title text-uppercase">
                          <h3>
                            <Link to={"#"} style={inrtoItemTitle_H3_Link}>
                              Triple room
                            </Link>
                          </h3>
                        </div>
                        <a href="#" className="intro-bgImage">
                          <img
                            src={introk}
                            alt="#"
                            className="w-100"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Travel */}
        <section>
          <div className="travel">
            <div className="container">
              <h2 className="title-heading">Tour travel</h2>
              <div className="row">
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="travel-item d-flex">
                    <a href="#" className="travel-img">
                      <img
                        src={travel1}
                        alt=""
                      />
                    </a>
                    <div className="travel-content">
                      <h3>
                        <a href="#">
                          Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="travel-item d-flex">
                    <a href="#" className="travel-img">
                      <img
                        src={travel2}
                        alt=""
                      />
                    </a>
                    <div className="travel-content">
                      <h3>
                        <a href="#">
                          Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="travel-item d-flex">
                    <a href="#" className="travel-img">
                      <img
                        src={travel3}
                        alt=""
                      />
                    </a>
                    <div className="travel-content">
                      <h3>
                        <a href="#">
                          Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="travel-item d-flex">
                    <a href="#" className="travel-img">
                      <img
                        src={travel4}
                        alt=""
                      />
                    </a>
                    <div className="travel-content">
                      <h3>
                        <a href="#">
                          Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="travel-item d-flex">
                    <a href="#" className="travel-img">
                      <img
                        src={travel5}
                        alt=""
                      />
                    </a>
                    <div className="travel-content">
                      <h3>
                        <a href="#">
                          Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="travel-item d-flex">
                    <a href="#" className="travel-img">
                      <img
                        src={travel6}
                        alt=""
                      />
                    </a>
                    <div className="travel-content">
                      <h3>
                        <a href="#">
                          Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Food Restaurant and services */}
        <section>
          <div className="frs-service bg-white bg-abe">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="food">
                    <h2 className="frs-title">food restaurant</h2>
                    <div className="food-res">
                      <div className="food-border">
                        <span />
                      </div>
                      <div className="food-slide">
                        <div className="foodSlide-wrapper">
                          <div className="foodSlide-item">
                            <a href="#" className="food-img">
                              <img
                                src={foodres}
                                alt=""
                                className="w-100"
                              />
                            </a>
                            <div className="foodSlide-title">
                              <h3>
                                <a href="#">Lasagne al Forno</a>
                              </h3>
                            </div>
                          </div>
                          {/* <div className="foodSlide-item">
                            <a href="#" className="food-img">
                              <img
                                src={foodres}
                                alt=""
                                className="w-100"
                              />
                            </a>
                            <div className="foodSlide-title">
                              <h3>
                                <a href="#">Lasagne al Forno</a>
                              </h3>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="services">
                    <h2 className="frs-title">services</h2>
                    <div className="service-content row">
                      <div className="service-item col-md-12 col-lg-6 col-sm-12">
                        <a href="#" className="service-icon">
                          <img
                            src={ser1}
                            alt=""
                          />
                        </a>
                        <div className="service-title">
                          <h3>
                            <a href="#">Massage &amp; Sauna</a>
                          </h3>
                        </div>
                      </div>
                      <div className="service-item col-md-12 col-lg-6 col-sm-12">
                        <a href="#" className="service-icon">
                          <img
                            src={ser2}
                            alt=""
                          />
                        </a>
                        <div className="service-title">
                          <h3>
                            <a href="#">Charles bar</a>
                          </h3>
                        </div>
                      </div>
                      <div className="service-item col-md-12 col-lg-6 col-sm-12">
                        <a href="#" className="service-icon">
                          <img
                            src={ser3}
                            alt=""
                          />
                        </a>
                        <div className="service-title">
                          <h3>
                            <a href="#">Wedding</a>
                          </h3>
                        </div>
                      </div>
                      <div className="service-item col-md-12 col-lg-6 col-sm-12">
                        <a href="#" className="service-icon">
                          <img
                            src={ser4}
                            alt=""
                          />
                        </a>
                        <div className="service-title">
                          <h3>
                            <a href="#">Meetings &amp; events</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* News highlights */}
        <section>
          <div className="news">
            <div className="container">
              <h2 className="title-heading">News highlights</h2>
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="news-item">
                    <a href="#" className="news-img">
                      <img
                        src={news1}
                        alt=""
                        className="w-100"
                      />
                    </a>
                  </div>
                  <h3>
                    <a href="#">
                      World Tourism Day 2019: Tourism and Jobs - A better Future
                      for All
                    </a>
                  </h3>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="news-item">
                    <a href="#" className="news-img">
                      <img
                        src={news2}
                        alt=""
                        className="w-100"
                      />
                    </a>
                  </div>
                  <h3>
                    <a href="#">
                      Vietnam featured in Louis Vuitton advertisement
                    </a>
                  </h3>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="news-item">
                    <a href="#" className="news-img">
                      <img
                        src={news3}
                        alt=""
                        className="w-100"
                      />
                    </a>
                  </div>
                  <h3>
                    <a href="#">
                      Foodwise: Cuon dap Da Nang and its Ha Noi brother are
                      must-try dishes
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What other say */}
        <section>
          <div className="other bg-white bg-abe">
            <div className="container">
              <div className="other-slider">
                <SliderReview />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
