import React from "react";
import Banner from "../_child/Banner";

const AboutUsManagement = () => {
  const config = {
    title: "About Us",
    slug: "about-us",
  };
  return (
    <div>
      <h1>About Us Management</h1>
      <Banner {...config} />
    </div>
  );
};

export default AboutUsManagement;
