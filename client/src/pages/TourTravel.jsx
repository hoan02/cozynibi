import { useState, useEffect } from "react";

import Banner from "../components/_child/Banner";
import newRequest from "../utils/newRequest";

// import images
import itemImg from "../assets/images/our-tour.jpg";

const tourItems = [
  {
    img: itemImg,
    content_1: "bich dong pagoda",
    content_2: "mua cave - phat diem cathedral",
  },
  {
    img: itemImg,
    content_1: "bich dong pagoda",
    content_2: "mua cave - phat diem cathedral",
  },
  {
    img: itemImg,
    content_1: "bich dong pagoda",
    content_2: "mua cave - phat diem cathedral",
  },
  {
    img: itemImg,
    content_1: "bich dong pagoda",
    content_2: "mua cave - phat diem cathedral",
  },
];

const TourTravel = () => {
  const folder = "banner/tour-travel";
  const [imgBanner, setImgBanner] = useState("");
  useEffect(() => {
    newRequest.get(`image/?folder=${folder}`).then((res) => {
      setImgBanner(res.data.url);
    });
  }, []);

  return (
    <div className="tour-travel">
      {imgBanner && <Banner img={imgBanner} text="tour travel" />}

      <div className="container">
        <div className="tour-travel_short_desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            molestie nisl. Duis ac mi leo. Mauris at convallis erat. Aliquam
            interdum semper luctus. Aenean ex tellus, gravida ut rutrum
            dignissim, malesuada vitae nulla. Sed viverra, nisl dapibus lobortis
            porttitor, risus risus dictum risus, sed rhoncus orci urna dignissim
            leo. Cras id nunc nulla. Aliquam a tortor fermentum, finibus elit
            ac, dictum purus. Nulla mollis ex interdum commodo luctus. In hac
            habitasse platea dictumst. Quisque vel rutrum ipsum. Praesent at
            imperdiet diam. Ut vel vulputate massa. Duis condimentum tincidunt
            tristique.
          </p>
        </div>

        <div className="our-tour">
          <h2 className="tour-travel_title2">
            <span>our tours</span>
          </h2>
          <div className="list-our-tour">
            <ul>
              {tourItems.map((tourItem, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="item">
                      <div className="tour-avt">
                        <img src={tourItem.img} alt="" />
                      </div>
                      <div className="box-layer">
                        <div className="tour-desc">
                          <div className="tour-desc_middle">
                            <h3>
                              <span>
                                {tourItem.content_1} <br /> {tourItem.content_2}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourTravel;
