import { useState } from "react";
import Banner from "../components/_child/Banner";

// import images
import galleryItem from "../assets/images/gallery-item.jpg";
import banner from "../assets/images/banner-gallery.jpg";

import newRequest from "../utils/NewRequest";

const Gallery = () => {
  const folder = "banner/gallery";
  const [imgBanner, setImgBanner] = useState("");
  newRequest.get(`image/?folder=${folder}`).then((res) => {
    setImgBanner(res.data.url);
  });

  return (
    <div>
      {imgBanner && <Banner img={imgBanner} text="gallery" />}
      <section>
        <div className="gallery bg-white">
          <div className="container">
            <div className="gallery-box">
              <div className="gallery-list row"></div>
              <div className="pagination">
                <ul id="pagination-gallery">
                  <div class="col-md-4 col-lg-3 col-sm-6">
                    <div class="gallery-item">
                      <a href="#" class="gallery-img">
                        <img src={galleryItem} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 col-sm-6">
                    <div class="gallery-item">
                      <a href="#" class="gallery-img">
                        <img src={galleryItem} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 col-sm-6">
                    <div class="gallery-item">
                      <a href="#" class="gallery-img">
                        <img src={galleryItem} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 col-sm-6">
                    <div class="gallery-item">
                      <a href="#" class="gallery-img">
                        <img src={galleryItem} alt="" />
                      </a>
                    </div>
                  </div>
                </ul>
                <ul id="pagination-gallery">
                  <div class="col-md-4 col-lg-3 col-sm-6">
                    <div class="gallery-item">
                      <a href="#" class="gallery-img">
                        <img src={galleryItem} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 col-sm-6">
                    <div class="gallery-item">
                      <a href="#" class="gallery-img">
                        <img src={galleryItem} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 col-sm-6">
                    <div class="gallery-item">
                      <a href="#" class="gallery-img">
                        <img src={galleryItem} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 col-sm-6">
                    <div class="gallery-item">
                      <a href="#" class="gallery-img">
                        <img src={galleryItem} alt="" />
                      </a>
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

export default Gallery;
