import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import RoomTable from "../components/roomControl/RoomTable";

const Accommodation = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "green" }}>ACCOMMODATION</h1>
      <Button
        className="btn-create"
        variant="contained"
        color="success"
        onClick={() => navigate(`create`)}
        sx={{ margin: "20px" }}
      >
        Create new room
      </Button>

      <RoomTable />
    </Box>
  );
};

export default Accommodation;
