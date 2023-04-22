import Banner from "../components/_child/Banner";

// import images
import banner from "../assets/images/banner-travel.jpg";
import travelItem from "../assets/images/our-tour.jpg";

const TourTravel = () => {
  return (
    <div className="tour-travel">
      <div>
        <Banner img={banner} text="tour travel" />
        <section className="travel-content">
          <div className="travel-title">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel molestie nisl. Duis ac mi leo. Mauris at convallis erat.
              Aliquam interdum semper luctus. Aenean ex tellus, gravida ut
              rutrum dignissim, malesuada vitae nulla. Sed viverra, nisl dapibus
              lobortis porttitor, risus risus dictum risus, sed rhoncus orci
              urna dignissim leo. Cras id nunc nulla. Aliquam a tortor
              fermentum, finibus elit ac, dictum purus. Nulla mollis ex interdum
              commodo luctus. In hac habitasse platea dictumst. Quisque vel
              rutrum ipsum. Praesent at imperdiet diam. Ut vel vulputate massa.
              Duis condimentum tincidunt tristique.
            </p>
          </div>

          <div className="travel-body">
            <div className="travel-body_title">
              <p>our tours</p>
            </div>

            <div className="travel-body_content">
              <ul>
                <li>
                  <a href="" className="travel-item">
                    <div className="travel-item_ava">
                      <img src={travelItem} alt="" />
                    </div>
                    <div className="travel-item_box-layer">
                      <div className="travel-desc">
                        <div className="travel-desc_middle">
                          <h3>
                            <span>
                              bich dong pagoda <br /> mua cave - phat diem
                              cathedral
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TourTravel;
