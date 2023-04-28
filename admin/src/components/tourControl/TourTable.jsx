import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Radio } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import newRequest from "../../utils/newRequest";
import toastService from "../../utils/toastService";

// const tourTable = ({ data, handleUpdate, handleDelete }) => {
const tourTable = ({ data }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // DELETE: delete tour
  const deleteBanner = useMutation({
    mutationFn: (tourId) => {
      return newRequest.delete(`/tour/delete/${tourId}`);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries(["tours"]);
    },
  });

  const handleDelete = (tourId) => {
    deleteBanner.mutate(tourId);
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
      field: "name",
      headerName: "Name",
      width: 500,
    },
    {
      field: "tourCode",
      headerName: "Tour Code",
      width: 150,
    },
    
    {
      field: "idObject",
      headerName: "Id Object",
      width: 240,
    },
    {
      field: "Update",
      headerName: "",
      width: 100,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate(`update/${params.row.idObject}`)}
        >
          Update
        </Button>
      ),
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
          disabled={params.row.isShow ? true : false}
        >
          Delete
        </Button>
      ),
    },
  ];

  const tourData = data.map((item, index) => ({
    stt: index + 1,
    image: item.images[0].url,
    name: item.name,
    tourCode: item.tourCode,
    idObject: item._id,
  }));

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        density="comfortable"
        getRowId={(row) => row.stt}
        rows={tourData}
        columns={columns}
        rowHeight={100}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default tourTable;
