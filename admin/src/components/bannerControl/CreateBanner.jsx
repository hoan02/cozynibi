import { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import newRequest from "../../utils/newRequest";
import toastService from "../../utils/toastService";
import bannerDefault from "../../assets/images/banner-default.jpg";
import BoardBanner from "./BoardBanner";
import "./CreateBanner.scss";

const CreateBanner = ({ slug }) => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef(null);
  const [imgPreview, setImgPreview] = useState("");
  const [resImg, setResImg] = useState(null);

  // Choose photo
  const handleImageChange = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      setImgPreview(reader.result);
      try {
        const res = await newRequest.post(`image/create`, {
          file: reader.result,
          name: file.name,
          folder: `banner/${slug}`,
        });
        setResImg(res.data.image);
      } catch (err) {
        console.log(err);
      }
    };
  };

  // POST: Create new image banner
  const createBanner = useMutation({
    mutationFn: (image) => {
      return newRequest.post(`/banner/create/all?slug=${slug}`, image);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries(["banners"]);
      setImgPreview("");
      setResImg(null);
      fileInputRef.current.value = "";
    },
  });

  const handleCreate = () => {
    createBanner.mutate(resImg);
  };

  return (
    <div className="container">
      <div className="create-banner">
        <div className="content">
          <div className="img">
            <img src={imgPreview || bannerDefault} alt="Image Preview" />
          </div>
          <div className="form">
            <div className="upload">
              Chọn ảnh:
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                />
                <PhotoCamera />
              </IconButton>
            </div>
            <div>Name file: {resImg && resImg.name}</div>
            <div>Folder: {resImg && resImg.folder}</div>
            <div>Public id: {resImg && resImg.publicId}</div>
            <div>
              Url:
              <a href={resImg && resImg.url} target="_blank">
                {resImg && resImg.url}{" "}
              </a>
            </div>
            {resImg ? (
              <Button
                className="btn-create"
                variant="contained"
                color="success"
                onClick={handleCreate}
              >
                Create
              </Button>
            ) : (
              <Button className="btn-create" variant="contained" disabled>
                Create
              </Button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CreateBanner;
