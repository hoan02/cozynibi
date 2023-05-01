import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";

import newRequest from "../../utils/newRequest";
import toastService from "../../utils/toastService";

const BoardFood = () => {
  const queryClient = useQueryClient();
  const [dataFoodGrid, setDataFoodGrid] = useState();
  // GET: Get all foods
  const { isLoading, error } = useQuery({
    queryKey: ["foods"],
    queryFn: () =>
      newRequest.get(`/food`).then((res) => {
        setDataFoodGrid(
          res.data.reverse().map((item, index) => ({
            stt: index + 1,
            nameFood: item.name,
            idObject: item._id,
            image: item.image.url,
            nameFile: item.image.name,
            publicId: item.image.publicId,
          }))
        );
        return res.data;
      }),
  });

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

  const columns = [
    {
      field: "stt",
      headerName: "STT",
      width: 50,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          <img
            src={params.value}
            alt=""
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
            }}
          />
        </a>
      ),
    },
    {
      field: "nameFood",
      headerName: "Name food",
      width: 260,
    },
    {
      field: "nameFile",
      headerName: "Name file",
      width: 180,
    },
    {
      field: "publicId",
      headerName: "Public Id",
      width: 250,
    },
    {
      field: "idObject",
      headerName: "Id Object",
      width: 240,
    },
    {
      field: "Delete",
      headerName: "",
      width: 100,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(params.row.idObject)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {isLoading ? (
        <div>Loading</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <DataGrid
          density="comfortable"
          getRowId={(row) => row.stt}
          rows={dataFoodGrid}
          columns={columns}
          rowHeight={100}
          components={{ Toolbar: GridToolbar }}
        />
      )}
    </div>
  );
};

export default BoardFood;
