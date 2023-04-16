import React from "react";
import NewRequest from "../../utils/NewRequest";
import ToastService from "../../utils/ToastService";

const Home = () => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      await NewRequest.post(`image/create`, {
        image: reader.result,
        folder: "banners",
        name: file.name,
      })
        .then((res) => {
          ToastService.success("Create image successfully!");
        })
        .catch((err) => {
          ToastService.error("Create image fail!");
        });
    };
  };
  return (
    <div>
      <h1>Đây là Home Page</h1>
      <div className="container">
        <input type="file" onChange={handleImageChange} />
      </div>
    </div>
  );
};

export default Home;
