import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Radio } from "@mui/material";

const FoodTable = ({ data, handleDelete }) => {
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

  const foodData = data.map((item, index) => ({
    stt: index + 1,
    nameFood: item.name,
    idObject: item._id,
    image: item.image.url,
    nameFile: item.image.name,
    publicId: item.image.publicId,
  }));

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        density="comfortable"
        getRowId={(row) => row.stt}
        rows={foodData}
        columns={columns}
        rowHeight={100}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default FoodTable;
