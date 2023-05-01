import { useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import newRequest from "../../utils/newRequest";
import toastService from "../../utils/toastService";
import bannerDefault from "../../assets/images/banner-default.jpg";
import BannerTable from "./BannerTable";
import "./BannerControl.scss";

const BannerControl = ({ slug }) => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef(null);
  const [id, setId] = useState("");
  const [imgPreview, setImgPreview] = useState("");
  const [resImg, setResImg] = useState(null);
  const [allImages, setAllImages] = useState([]);

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

  // GET: Get all banner
  const {
    isLoading,
    error,
    data: allBanner,
  } = useQuery({
    queryKey: ["banners", slug],
    queryFn: () =>
      newRequest.get(`/banner/all?slug=${slug}`).then((res) => {
        setId(res.data._id);
        setAllImages(res.data.image.reverse());
        return res.data;
      }),
  });

  // POST: Create new image banner
  const createBanner = useMutation({
    mutationFn: (image) => {
      return newRequest.post(`/banner/create/${id}`, image);
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

  // PUT: Update banner
  const updateBanner = useMutation({
    mutationFn: ({ imageOldId, imageNewId }) => {
      return newRequest.put(`/banner/update`, {
        imageOldId,
        imageNewId,
      });
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries(["banners"]);
    },
  });

  const handleUpdate = (imageOldId, imageNewId) => {
    updateBanner.mutate({ imageOldId, imageNewId });
  };

  // DELETE: Delete banner
  const deleteBanner = useMutation({
    mutationFn: (imgId) => {
      return newRequest.delete(`/banner/delete/${id}?imageId=${imgId}`);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries(["banners"]);
    },
  });

  const handleDelete = (imgId) => {
    deleteBanner.mutate(imgId);
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

      <div className="render-banner">
        {isLoading ? (
          <div>Loading</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <BannerTable
            data={allImages}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default BannerControl;
