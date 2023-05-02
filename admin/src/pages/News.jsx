import { Box } from "@mui/material";
import CreatePost from "../components/postControl/CreatePost";

const News = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "green" }}>NEWS</h1>
      <CreatePost />
    </Box>
  );
};

export default News;
