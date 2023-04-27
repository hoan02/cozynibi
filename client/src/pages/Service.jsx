import { useState, useEffect } from "react";

import newRequest from "../utils/NewRequest";
import Banner from "../components/_child/Banner";

const Service = () => {
  const folder = "banner/service";
  const [imgBanner, setImgBanner] = useState("");
  useEffect(() => {
    newRequest.get(`image/?folder=${folder}`).then((res) => {
      setImgBanner(res.data.url);
    });
  }, []);

  return (
    <div className="service">
      {imgBanner && <Banner img={imgBanner} text="service" />}
    </div>
  );
};

export default Service;
