import { useState } from "react";
import newRequest from "../../utils/newRequest.js";
import toastService from "../../utils/toastService.js";

const CreateBanner = () => {
  const [imgPreview, setImgPreview] = useState("");
  const [selectedPage, setSelectedPage] = useState("");

  const pages = [
    { name: "Select page", value: "" },
    { name: "ABOUT US", value: "about-us" },
    { name: "ACCOMMODATION", value: "accommodation" },
    { name: "MENU", value: "menu" },
    { name: "TOUR TRAVEL", value: "tour-travel" },
    { name: "SERVICE", value: "service" },
    { name: "NEWS", value: "news" },
    { name: "GALLERY", value: "gallery" },
    { name: "CONTACT", value: "contact" },
  ];

  const [form, setForm] = useState({
    title: "",
    image: {
      _id: "",
      name: "",
      folder: "",
      url: "",
      publicId: "",
    },
  });

  const handleSelectedPage = (e) => {
    const selectedOption = pages.find(
      (option) => option.value === e.target.value
    );
    setSelectedPage(selectedOption);
    setForm({
      ...form,
      title: selectedOption.name,
      image: { folder: `banners/${selectedOption.value}` },
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      setImgPreview(reader.result);
      await newRequest
        .post(`image/create`, {
          file: reader.result,
          name: file.name,
          folder: form.image.folder,
        })
        .then((res) => {
          const { name, publicId, url, _id } = res.data.image;
          setForm({
            ...form,
            image: {
              _id,
              name,
              publicId,
              url,
            },
          });
          toastService.success(res.data.message);
        })
        .catch((err) => {
          toastService.error(err.response.data);
        });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newRequest
      .post("banner/create", {
        title: form.title,
        image: form.image._id,
      })
      .then((res) => {
        toastService.success(res.data.message);
      })
      .catch((err) => {
        toastService.error(err.response.data);
      });
  };

  console.log(form)

  return (
    <div className="create-banner">
      <div className="container">
        <div className="up-load">
          <p>Tải ảnh lên</p>
          <select className="form-control" onChange={handleSelectedPage}>
            {pages.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <div className="preview">
            <img src={imgPreview} alt="" />
          </div>
          {form.image.folder && (
            <input type="file" onChange={handleImageChange} />
          )}
        </div>
      </div>
      <div className="form">
        <form>
          <h2>Form</h2>
          <div>Title: {form.title}</div>
          <div>Name img: {form.image.name}</div>
          <div>
            Url img:{" "}
            <a href={form.image.url} target="_blank">
              {form.image.url}
            </a>
          </div>
          <div>PublicId img: {form.image.publicId}</div>
          {form.image.publicId && <button onClick={handleSubmit}>Submit</button>}
        </form>
      </div>
    </div>
  );
};

export default CreateBanner;
