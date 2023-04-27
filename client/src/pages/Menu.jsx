import { useState, useEffect } from "react";
import Banner from "../components/_child/Banner";

// import images
import menuItem from "../assets/images/menu-item.jpg";
import bannerGalley from "../assets/images/banner-gallery.jpg";

import newRequest from "../utils/NewRequest";

const Menu = () => {
  const folder = "banner/menu";
  const [imgBanner, setImgBanner] = useState("");

  useEffect(() => {
    newRequest.get(`image/?folder=${folder}`).then((res) => {
      setImgBanner(res.data.url);
    });
  }, []);

  return (
    <div>
      {imgBanner && <Banner img={imgBanner} text="Menu" />}
      <section>
        <div className="menu bg-white">
          <div className="container">
            <div className="menu-box">
              <div className="menu-list row"></div>
              <div className="pagination">
                <ul id="pagination-menu">
                  <div class="col-md-6 col-lg-4 col-sm-12">
                    <div class="menu-item">
                      <a href="#" class="menu-img">
                        <img src={menuItem} alt="" />
                      </a>
                      <div class="menu-title">
                        <h3>
                          <a href="#">Lasagne al Forno</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-sm-12">
                    <div class="menu-item">
                      <a href="#" class="menu-img">
                        <img src={menuItem} alt="" />
                      </a>
                      <div class="menu-title">
                        <h3>
                          <a href="#">Lasagne al Forno</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-sm-12">
                    <div class="menu-item">
                      <a href="#" class="menu-img">
                        <img src={menuItem} alt="" />
                      </a>
                      <div class="menu-title">
                        <h3>
                          <a href="#">Lasagne al Forno</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </ul>
                <ul id="pagination-menu">
                  <div class="col-md-6 col-lg-4 col-sm-12">
                    <div class="menu-item">
                      <a href="#" class="menu-img">
                        <img src={menuItem} alt="" />
                      </a>
                      <div class="menu-title">
                        <h3>
                          <a href="#">Lasagne al Forno</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-sm-12">
                    <div class="menu-item">
                      <a href="#" class="menu-img">
                        <img src={menuItem} alt="" />
                      </a>
                      <div class="menu-title">
                        <h3>
                          <a href="#">Lasagne al Forno</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 col-sm-12">
                    <div class="menu-item">
                      <a href="#" class="menu-img">
                        <img src={menuItem} alt="" />
                      </a>
                      <div class="menu-title">
                        <h3>
                          <a href="#">Lasagne al Forno</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
