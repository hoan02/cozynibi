import { useState, useEffect } from "react";

import Banner from "../components/_child/Banner";
import newRequest from "../utils/newRequest";

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
    </div>
  );
};

export default TourTravel;
