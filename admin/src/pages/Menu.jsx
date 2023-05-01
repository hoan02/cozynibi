import FoodControl from "../components/foodControl/FoodControl";
import { Box } from "@mui/material";

const Menu = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "green" }}>MENU</h1>
      <FoodControl />
    </Box>
  );
};

export default Menu;
