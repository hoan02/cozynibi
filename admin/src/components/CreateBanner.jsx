import { useState } from "react";
import newRequest from "../utils/newRequest.js";
import toastService from "../utils/toastService.js";

const CreateBanner = () => {
  const [imgPreview, setImgPreview] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "banner",
    image: {
      name: "",
      url: "",
      publicId: "",
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      setImgPreview(reader.result);
      await newRequest
        .post(`upload`, {
          file: reader.result,
          slug: form.slug,
        })
        .then((res) => {
          console.log(res.data.image.url);
          toastService.success(res.data.message);
          setForm({
            ...form,
            image: {
              url: res.data.image.url,
              publicId: res.data.image.publicId,
              name: file.name,
            },
          });
        })
        .catch((err) => {
          console.log(err);
          // toastService.error("");
        });
    };
  };

  return (
    <div className="create-banner">
      <div className="container">
        <div className="up-load">
          <p>Tải ảnh lên</p>
          <div className="preview">
            <img src={imgPreview} alt="" />
          </div>
          <input type="file" onChange={handleImageChange} />
        </div>
      </div>
      <div className="form">
        <h2>Form</h2>
        <div>Title: {form.title}</div>
        <div>Slug: {form.slug}</div>
        <div>Name img: {form.image.name}</div>
        <div>
          Url img: <a href={form.image.url} target="_blank">{form.image.url}</a>
        </div>
        <div>PublicId img: {form.image.publicId}</div>
      </div>
    </div>
  );
};

export default CreateBanner;
