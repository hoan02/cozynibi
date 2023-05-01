import { Box } from "@mui/material";
import BoardFood from "../components/foodControl/BoardFood";
import CreateFood from "../components/foodControl/CreateFood";

const Menu = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "green" }}>MENU</h1>
      <CreateFood />
      <BoardFood />
    </Box>
  );
};

export default Menu;
