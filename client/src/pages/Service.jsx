import { useState, useEffect } from "react";
import newRequest from "../utils/newRequest";
import Banner from "../components/_child/Banner";

// import images
import img1 from "../assets/images/icon/ser-1.png";
import img2 from "../assets/images/icon/ser-2.png";
import img3 from "../assets/images/icon/ser-3.png";
import img4 from "../assets/images/icon/ser-4.png";

const Service = () => {
  const folder = "banner/service";
  const [imgBanner, setImgBanner] = useState("");
  useEffect(() => {
    newRequest
      .get(`image/?folder=${folder}`)
      .then((res) => {
        setImgBanner(res.data.url);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div className="service">
      {imgBanner && <Banner img={imgBanner} text="service" />}

    </div>
  );
};

export default Service;
