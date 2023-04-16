import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import bannerDefault from "../../assets/images/banner-default.jpg";
import NewRequest from "../../utils/NewRequest";
import ToastService from "../../utils/ToastService";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isShowInputFile, setIsShowInputFile] = useState(false);
  const [idImage, setIdImage] = useState("");

  // Get all banner
  const {
    isLoading,
    error,
    data: allBanner,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: () =>
      NewRequest.get(`/banners/all`).then((res) => {
        return res.data;
      }),
  });

  // Update banner
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      await NewRequest.put(`image/update/${idImage}`, {
        image: reader.result,
        folder: "banners",
        name: file.name,
      })
        .then((res) => {
          setIsShowInputFile(false);
          ToastService.success("Update banner successfully!");
          queryClient.invalidateQueries(["banners"]);
        })
        .catch((err) => {
          ToastService.error("Update banner fail!");
        });
    };
  };

  const handleUpdate = (banner) => {
    setIdImage(banner.image._id);
    setIsShowInputFile(true);
  };

  // Delete banner
  const handleDelete = (banner) => {
    deleteBanner.mutate(banner._id);
  };

  const deleteBanner = useMutation({
    mutationFn: (bannerId) => {
      return NewRequest.delete(`/banners/delete/${bannerId}`);
    },
    onSuccess: () => {
      ToastService.success("Delete banner successfully!");
      queryClient.invalidateQueries(["banners"]);
    },
  });

  return (
    <div className="banner">
      <h1>Quản lý banner</h1>
      <div className="container">
        <div className="render-banner">
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error.message}</div>
          ) : (
            allBanner.map((banner) => {
              return (
                <div key={banner._id} className="banner-container">
                  <form action="" className="form">
                    <div className="item">
                      <span className="form-control">{banner.title}</span>
                    </div>
                    <div className="item">
                      <img src={banner.image.url || bannerDefault} alt="" />
                    </div>
                    <div className="item">
                      <span className="form-control">
                        <span>{banner.image.name}</span>
                      </span>
                    </div>
                  </form>
                  <div className="item">
                    {isShowInputFile ? (
                      <input type="file" onChange={handleImageChange} />
                    ) : (
                      <button onClick={() => handleUpdate(banner)}>
                        Update
                      </button>
                    )}
                  </div>
                  <div className="item">
                    <button onClick={() => handleDelete(banner)}>Delete</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
