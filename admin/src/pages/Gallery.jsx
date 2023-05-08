import { Box } from "@mui/material";
import CreateShowcase from "../components/showcaseControl/CreateShowcase";
import BoardShowcase from "../components/showcaseControl/BoardShowcase";

const Gallery = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "green" }}>GALLERY</h1>
      <CreateShowcase />
      <BoardShowcase />
    </Box>
  );
};

export default Gallery;
