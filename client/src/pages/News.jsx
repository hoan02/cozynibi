import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/_child/Banner";

// import images
import newItem from '../assets/images/news-item.jpg'
import banner from '../assets/images/banner-gallery.jpg'

const itemContentContainerLink = {
  margin: "0 0 15px",
  fontSize: "18px",
  lineHeight: "28px",
  color: "#000",
  textTransform: "uppercase",
  fontWeight: "bolder",
  transition: "0.3s",
};

const readMoreLink = {
  fontSize: "15px",
  lineHeight: "24px",
  fontWeight: "bold",
  marginTop: "20px",
  marginBottom: "10px",
  color: "#000",
};

const News = () => {
  return (
    <div>
      <Banner img={banner} text='news'/>
      <div className="page-news">
        <div className="container">
          <div className="news-box">
            <div className="item">
              <div className="item-border" />
              <div className="item-img">
                <img src={newItem} alt="" />
              </div>
              <div className="item-content">
                <div className="item-content-container">
                  <h3>
                    <Link to={"#"} style={itemContentContainerLink}>
                      LASAGNE AL FORNO
                    </Link>
                  </h3>
                  <p>
                    Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.
                    Lorem ipsum dolor. Mauris fermentum dictum magna. Sed
                    laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                  </p>
                  <div className="read-more">
                    <Link to={"#"} style={readMoreLink}>
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-border" />
              <div className="item-content">
                <div className="item-content-container">
                  <h3>
                    <Link to={"#"} style={itemContentContainerLink}>
                      LASAGNE AL FORNO
                    </Link>
                  </h3>
                  <p>
                    Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.
                    Lorem ipsum dolor. Mauris fermentum dictum magna. Sed
                    laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                  </p>
                  <div className="read-more">
                    <Link to={"#"} style={readMoreLink}>
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item-img">
                <img src={newItem} alt="" />
              </div>
            </div>
            <div className="item">
              <div className="item-border" />
              <div className="item-img">
                <img src={newItem} alt="" />
              </div>
              <div className="item-content">
                <div className="item-content-container">
                  <h3>
                    <Link to={"#"} style={itemContentContainerLink}>
                      LASAGNE AL FORNO
                    </Link>
                  </h3>
                  <p>
                    Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.
                    Lorem ipsum dolor. Mauris fermentum dictum magna. Sed
                    laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                  </p>
                  <div className="read-more">
                    <Link to={"#"} style={readMoreLink}>
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination" />
        </div>
      </div>
    </div>
  );
};

export default News;
