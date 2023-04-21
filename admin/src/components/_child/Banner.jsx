import { useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import newRequest from "../../utils/newRequest";
import toastService from "../../utils/toastService";
import bannerDefault from "../../assets/images/banner-default.jpg";
import "../../assets/styles/_child/banner.css";

const Banner = (props) => {
  const queryClient = useQueryClient();
  const { title, slug } = props;
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
    queryKey: ["banners"],
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
    mutationFn: (image) => {
      return newRequest.put(`/banner/update/${id}`, image);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries(["banners"]);
    },
  });
  const handleUpdate = () => {};

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
    <div className="banner">
      <h1>Banner</h1>
      <div className="create-banner">
        <p>Create new banner</p>
        <div className="create-banner-content">
          <img src={imgPreview || bannerDefault} alt="Image Preview" />
          <div className="form">
            <input
              className="input"
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
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
              <button onClick={handleCreate}>Create</button>
            ) : (
              <button style={{ cursor: "wait", opacity: 0.5 }} disabled>
                Create
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="render-banner">
        <h3>Render banner</h3>
        {isLoading ? (
          <div>Loading</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          allImages.map((img) => {
            return (
              <div className="item" key={img._id}>
                <img src={img.url} alt={img.name} />
                <span>{img.name}</span>
                <span>{img.publicId}</span>
                <a href={img.url} target="_blank">
                  {img.url.slice(0, 40)}...
                </a>
                {/* <button onClick={handleUpdate}>Update</button> */}
                <button onClick={() => handleDelete(img._id)}>Delete</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Banner;
