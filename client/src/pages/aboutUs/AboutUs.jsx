import React from "react";
import "./AboutUs.css";
import ScrollToTopButton from '../../utils/ScrollToTopButton'

const About = () => {
  return (
    <div>
      {/* <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>About</title>
      Bootstrap
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      Fontawesome
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="stylesheet" href="../../Css/common/common.css" />
      <link rel="stylesheet" href="../../Css/layout/about.css" />
      Header
      <header>
        <div id="header" />
      </header> */}
      <div className="banner">
        <div className="banner-title">
          <div className="avt">
            {/* <img src={require("../../assets/images/banner-about-us.jpg")} alt="" /> */}
            <img src={require("../../assets/images/banner-about-us.jpg")} alt="" />
          </div>
          <div className="desc">
            <h1>
              <span>About Us</span>
            </h1>
            <img src={require("../../assets/images/bg-tit.png")} alt="" />
          </div>
        </div>
        <div className="top-connect">
          <img src={require("../../assets/images/bg-abu.png")} alt="" />
        </div>
      </div>
      <div className="about-intro bg-sena">
        <div className="container position-abs">
          <h2>
            Welcome to <br />
            <b>Cozynibi Hotel</b>
          </h2>
          <div className="detail_">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel molestie nisl. Duis ac mi leo. Mauris at convallis erat.
              Aliquam interdum semper luctus. Aenean ex tellus, gravida ut
              rutrum dignissim, malesuada vitae nulla. Sed viverra, nisl dapibus
              lobortis porttitor, risus risus dictum risus, sed rhoncus orci
              urna dignissim leo. Cras id nunc nulla. Aliquam a tortor
              fermentum, finibus elit ac, dictum purus. Nulla mollis ex interdum
              commodo luctus. In hac habitasse platea dictumst. Quisque vel
              rutrum ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="list-about-us">
        <div className="item-abu">
          <div className="top-connect">
            <img src={require("../../assets/images/bg-abu.png")} alt="" />
          </div>
          <div className="abu-content">
            <div className="avt">
              <img src={require("../../assets/images/abu-1.jpg")} alt="" />
            </div>
            <div className="desc">
              <h3>comfortable rooms</h3>
              <div className="content-wrapp">
                <div className="detail">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vel molestie nisl. Duis ac mi leo. Mauris at
                    convallis erat. Aliquam interdum semper luctus. Aenean ex
                    tellus, gravida ut rutrum dignissim, malesuada vitae nulla.
                    Sed viverra, nisl dapibus lobortis porttitor, risus risus
                    dictum risus, sed rhoncus orci urna
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-connect">
            <img src={require("../../assets/images/bg-abu.png")} alt="" />
          </div>
        </div>
        <div className="item-abu">
          <div className="top-connect">
            <img src={require("../../assets/images/bg-abu.png")} alt="" />
          </div>
          <div className="abu-content">
            <div className="avt">
              <img src={require("../../assets/images/abu-2.jpg")} alt="" />
            </div>
            <div className="desc special">
              <h3>extensive menu</h3>
              <div className="content-wrapp">
                <div className="detail">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vel molestie nisl. Duis ac mi leo. Mauris at
                    convallis erat. Aliquam interdum semper luctus. Aenean ex
                    tellus, gravida ut rutrum dignissim, malesuada vitae nulla.
                    Sed viverra, nisl dapibus lobortis porttitor, risus risus
                    dictum risus, sed rhoncus orci urna dignissim leo. Cras id
                    nunc nulla.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-connect">
            <img src={require("../../assets/images/bg-abu.png")} alt="" />
          </div>
        </div>
        <div className="item-abu">
          <div className="top-connect">
            <img src={require("../../assets/images/bg-abu.png")} alt="" />
          </div>
          <div className="abu-content">
            <div className="avt">
              <img src={require("../../assets/images/abu-3.jpg")} alt="" />
            </div>
            <div className="desc">
              <h3>extensive menu</h3>
              <div className="content-wrapp">
                <div className="detail">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vel molestie nisl. Duis ac mi leo. Mauris at
                    convallis erat. Aliquam interdum semper luctus. Aenean ex
                    tellus, gravida ut rutrum dignissim, malesuada vitae nulla.
                    Sed viverra, nisl dapibus lobortis porttitor, risus risus
                    dictum risus, sed rhoncus orci urna dignissim leo. Cras id
                    nunc nulla. Aliquam a tortor fermentum, finibus elit ac,
                    dictum purus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-connect mb-20px">
            <img src={require("../../assets/images/bg-abu.png")} alt="" />
          </div>
        </div>
      </div>
      {/* Hotline */}
      <div className="fix-hotline">
        <a href="#">
          <img src={require("../../Assets/icon/hotline-fix.png")} alt="" />
        </a>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default About;
