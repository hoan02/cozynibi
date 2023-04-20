import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import newRequest from "../../utils/newRequest";
import toastService from "../../utils/toastService";
import uploadImage from "../../utils/uploadImage";

const Banner = (props) => {
  const queryClient = useQueryClient();
  const { title, slug } = props;
  const [id, setId] = useState("");
  const [imgPreview, setImgPreview] = useState("");

  // GET: all banner
  const {
    isLoading,
    error,
    data: allBanner,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: () =>
      newRequest.get(`/banner/all?slug=${slug}`).then((res) => {
        setId(res.data._id);
        return res.data;
      }),
  });

  // Create new image banner
  const createBanner = useMutation({
    mutationFn: (image) => {
      return newRequest.post(`/banner/create/${id}`, image);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries(["banners"]);
    },
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const folder = `banner/${slug}`;
    try {
      const image = await uploadImage(file, folder);
      createBanner.mutate(image);
    } catch (error) {
      console.log(error);
    }
  };

  // Update banner
  const updateBanner = useMutation({
    mutationFn: (image) => {
      return newRequest.put(`/banner/update/${id}`, image);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries(["banners"]);
    },
  });
  const handleUpdate = () => {}

  // Delete banner
  const handleDelete = () => {}

  return (
    <div className="banner">
      <h1>Banner</h1>
      <div className="create-banner">
        <h3>Create new banner</h3>
        {imgPreview ? (
          <>
            <img src={imgPreview} alt="Image Preview" />
          </>
        ) : (
          <input type="file" onChange={handleImageChange} />
        )}
      </div>
      <div className="render-banner">
        <h3>Render banner</h3>
        {isLoading ? (
          <div>Loading</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          allBanner.image.map((img) => {
            return (
              <div key={img._id}>
                <img src={img.url} alt={img.name} />
                <span>Name: {img.name}</span>
                <span>Folder: {img.folder}</span>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Banner;
