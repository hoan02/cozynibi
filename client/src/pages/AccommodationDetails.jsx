import React, { useState, useEffect } from "react";
import Banner from "../components/_child/Banner";
import newRequest from "../utils/newRequest";


// import images
import slide from "../assets/images/accom-slide-d-1.jpg";
import icon1 from "../assets/images/acp-1.jpg";
import icon2 from "../assets/images/acp-2.jpg";
import icon3 from "../assets/images/acp-3.jpg";
import icon4 from "../assets/images/acp-4.jpg";
import itemsb1 from '../assets/images/item-sb-1.jpg'
import itemsb2 from '../assets/images/item-sb-2.jpg'
import itemsb3 from '../assets/images/item-sb-3.jpg'
import accommsmd1 from '../assets/images/accom-sm-d-1.jpg'
import accommsmd2 from '../assets/images/accom-sm-d-2.jpg'
import accommsmd3 from '../assets/images/accom-sm-d-3.jpg'

const AccommodationDetails = () => {
  const folder = "banner/accommodation";
  const [imgBanner, setImgBanner] = useState("");
  const [rooms, setRooms] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    newRequest
      .get(`image/?folder=${folder}`)
      .then((res) => {
        setImgBanner(res.data.url);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

    newRequest
      .get(`room`)
      .then((res) => {
        setRooms(res.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);
  return (
    <div>
      {imgBanner && <Banner img={imgBanner} text="accommodation" />}
      <div className="accommodation  bg-abe">
        <div className="container" style={{
          marginBottom: '40px',
        }}>
          <h1 className="titH1-d">
            <span>Double Room</span>
          </h1>
          <div className="row">
            <div className="main-content">
              <div className="images-detail-k">
                <div className="content-slide">
                  <div className="item active" data-id={1}>
                    <img src={slide} alt="" />
                  </div>
                  <div className="item-params" data-id={2}>
                    <img src={slide} alt="" />
                  </div>
                  <div className="item-params" data-id={3}>
                    <img src={slide} alt="" />
                  </div>
                  {/* <div className="item-params" data-id={4}>
                    <img src={slide} alt="" />
                  </div> */}
                </div>
                <div className="slide">
                  <div className="slide-ctmd">
                    <ul>
                      <li className="active active-k" data-id={1}>
                        <a href="javascript:void(0)">
                          <img src={accommsmd1} alt="" />
                        </a>
                      </li>
                      <li data-id={2}>
                        <a href="javascript:void(0)">
                          <img src={accommsmd2} alt="" />
                        </a>
                      </li>
                      <li data-id={3}>
                        <a href="javascript:void(0)">
                          <img src={accommsmd3} alt="" />
                        </a>
                      </li>
                      {/* <li data-id={4}>
                        <a href="javascript:void(0)">
                          <img src={accommsmd1} alt="" />
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="list-parameter">
                <div className="item-params">
                  <div className="icon">
                    <img src={icon1} alt="" />
                  </div>
                  <p>Room: 18m2</p>
                </div>
                <div className="item-params">
                  <div className="icon">
                    <img src={icon2} alt="" />
                  </div>
                  <p>high: 3.50</p>
                </div>
                <div className="item-params">
                  <div className="icon">
                    <img src={icon3} alt="" />
                  </div>
                  <p>Bed size: 1.1 * 2.0m</p>
                </div>
                <div className="item-params">
                  <div className="icon">
                    <img src={icon4} alt="" />
                  </div>
                  <p>Room rates: 600.000</p>
                </div>
              </div>
              <div className="detail_">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel molestie nisl. Duis ac mi leo. Mauris at convallis
                  erat. Aliquam interdum semper luctus. Aenean ex tellus,
                  gravida ut rutrum dignissim, malesuada vitae nulla. Sed
                  viverra, nisl dapibus lobortis porttitor, risus risus dictum
                  risus, sed rhoncus orci urna dignissim leo. Cras id nunc
                  nulla. Aliquam a tortor fermentum, finibus elit ac, dictum
                  purus. Nulla mollis ex interdum commodo luctus. In hac
                  habitasse platea dictumst. Quisque vel rutrum ipsum. Praesent
                  at imperdiet diam. Ut vel vulputate massa. Duis condimentum
                  tincidunt tristique.
                </p>
              </div>
              <div className="main-bottom">
                <h2>
                  <span>Double ROOMS EQUIPMENT </span>
                </h2>
                <div className="list-equipment">
                  <p>Free wifi - internet access</p>
                  <p>Work desk</p>
                  <p>Room phone</p>
                  <p>Minibar</p>
                  <p>Air-conditional</p>
                  <p>Tea-coffee</p>
                  <p>Swimming pool</p>
                  <p>Cupboard clothes</p>
                  <p>Room ammenities</p>
                  <p>Hair dryer</p>
                  <p>Cable TV</p>
                  <p>Modern bathroom equipment</p>
                  <p>High quality satin cotton bedding</p>
                  <p>Room service (surcharge)</p>
                  <p>Kettle</p>
                  <p>Iron - iron (upon request)</p>
                </div>
              </div>
            </div>
            <div className="side-bar">
              <div className="form-book">
                <form action="">
                  <div className="col-form">
                    <input
                      type="text"
                      className="inp-b date-time"
                      placeholder="CHECK IN"
                    />
                  </div>
                  <div className="col-form">
                    <input
                      type="text"
                      className="inp-b date-time"
                      placeholder="CHECK OUT"
                    />
                  </div>
                  <div className="col-form">
                    <select name="" id="" className="select-b">
                      <option value={0}>ADULTS</option>
                    </select>
                  </div>
                  <div className="col-form">
                    <select name="" id="" className="select-b">
                      <option value={0}>CHILDREN</option>
                    </select>
                  </div>
                  <div className="col">
                    <select name="" id="" className="select-b">
                      <option value={0}>Room</option>
                    </select>
                  </div>
                  <div className="col">
                    <a href="" className="btn-book-n">
                      Book now
                    </a>
                  </div>
                </form>
              </div>
              <div className="item-sb">
                <h2 className="tit-sb">
                  <span>Other Room</span>
                </h2>
                <div className="list-room-sb">
                  <ul>
                    <li>
                      <a href="" className="avt">
                        <img src={itemsb1} alt="" />
                      </a>
                      <div className="desc">
                        <div className="desc-midle">
                          <h3>
                            <a href="">Triple Room</a>
                          </h3>
                          <p>3 Bed</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="" className="avt">
                        <img src={itemsb2} alt="" />
                      </a>
                      <div className="desc">
                        <div className="desc-midle">
                          <h3>
                            <a href="">Triple Room</a>
                          </h3>
                          <p>2 Bed</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="" className="avt">
                        <img src={itemsb3} alt="" />
                      </a>
                      <div className="desc">
                        <div className="desc-midle">
                          <h3>
                            <a href="">Triple Room</a>
                          </h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetails;
