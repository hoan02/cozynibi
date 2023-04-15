import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import NewRequest from "../../utils/NewRequest";
import ToastService from "../../utils/ToastService";

import "./CreateBanner.css";

const CreateBanner = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const slugs = [
    { label: "ABOUT US", value: "about-us" },
    { label: "ACCOMMODATION", value: "accommodation" },
    { label: "MENU", value: "menu" },
    { label: "TOUR TRAVEL", value: "tour-travel" },
    { label: "SERVICE", value: "service" },
    { label: "NEWS", value: "news" },
    { label: "GALLERY", value: "gallery" },
    { label: "CONTACT", value: "contact" },
  ];

  const [form, setForm] = useState({
    title: "",
    slug: "",
    image: "",
  });

  const handleSelectedSlugs = (e) => {
    setForm({ ...form, slug: e.target.value });
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
  };

  // Create a new banner
  const createBanner = useMutation({
    mutationFn: () => {
      return NewRequest.post(`/banners/create`, form);
    },
    onSuccess: () => {
      ToastService.success("Banner created successfully!");
      queryClient.invalidateQueries(["banners"]);
      navigate(`/banners`)
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createBanner.mutate();
  }

  return (
    <div className="create-banner">
      <h1>Create Banner</h1>
      <div className="container">
        <form className="form">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Page: </label>
            <select
              className="form-control"
              value={form.slug}
              onChange={handleSelectedSlugs}
            >
              {slugs.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              className="form-control"
              onChange={handleImageChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBanner;
