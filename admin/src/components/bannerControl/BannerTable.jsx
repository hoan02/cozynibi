import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, Radio } from "@mui/material";

const BannerTable = ({ data, handleUpdate, handleDelete }) => {
  const handleChange = (imgNewId) => {
    const imageToShow = data.find((item) => item.isShow);
    if (imageToShow) {
      const imgOldId = imageToShow._id;
      handleUpdate(imgOldId, imgNewId);
    } else {
      console.log("err");
    }
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
      width: 300,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          <img
            src={params.value}
            alt=""
            style={{
              width: "280px",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </a>
      ),
    },
    {
      field: "nameFile",
      headerName: "Name file",
      width: 180,
    },
    {
      field: "publicId",
      headerName: "Public Id",
      width: 300,
    },
    {
      field: "idObject",
      headerName: "Id Object",
      width: 240,
    },
    {
      field: "isShow",
      headerName: "Is Show",
      width: 100,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Radio
          checked={params.row.isShow}
          onChange={() => {
            handleChange(params.row.idObject);
          }}
        />
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

  const bannerData = data.map((item, index) => ({
    stt: index + 1,
    image: item.url,
    nameFile: item.name,
    isShow: item.isShow,
    publicId: item.publicId,
    idObject: item._id,
  }));

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        density="comfortable"
        getRowId={(row) => row.stt}
        rows={bannerData}
        columns={columns}
        rowHeight={100}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default BannerTable;
