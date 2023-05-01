import { useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, IconButton, TextField } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import newRequest from "../../utils/newRequest";
import toastService from "../../utils/toastService";
import FoodDefault from "../../assets/images/food-default.jpg";
import "./FoodControl.scss";
import FoodTable from "./FoodTable";

const FoodControl = () => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef(null);
  const [imgPreview, setImgPreview] = useState("");
  const [resImg, setResImg] = useState(null);
  const [allFood, setAllFood] = useState([]);
  const [nameFood, setNameFood] = useState("");

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
          folder: `foods`,
        });
        setResImg(res.data.image);
      } catch (err) {
        console.log(err);
      }
    };
  };

  // GET: Get all foods
  const { isLoading, error } = useQuery({
    queryKey: ["foods"],
    queryFn: () =>
      newRequest.get(`/food`).then((res) => {
        setAllFood(res.data.reverse());
        return res.data;
      }),
  });

  // POST: Create new food
  const createFood = useMutation({
    mutationFn: (data) => {
      return newRequest.post(`/food/create`, data);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries(["foods"]);
      setImgPreview("");
      setResImg(null);
      fileInputRef.current.value = "";
    },
  });

  const handleCreate = () => {
    const data = {
      name: nameFood,
      image: resImg._id,
    };
    createFood.mutate(data);
  };

  // DELETE: Delete Food
  const deleteFood = useMutation({
    mutationFn: (foodId) => {
      return newRequest.delete(`/food/delete/${foodId}`);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries(["foods"]);
    },
  });

  const handleDelete = (foodId) => {
    deleteFood.mutate(foodId);
  };

  return (
    <div className="container">
      <div className="create-food">
        <div className="content">
          <div className="img">
            <img src={imgPreview || FoodDefault} alt="Image Preview" />
          </div>
          <div className="form">
            <TextField
              label="Name food"
              variant="outlined"
              onChange={(e) => setNameFood(e.target.value)}
            />
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

      <div className="render-food">
        {isLoading ? (
          <div>Loading</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <FoodTable data={allFood} handleDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default FoodControl;
