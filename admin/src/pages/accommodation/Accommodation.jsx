import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Button from "@mui/material/Button";
import RoomTable from "../../components/roomControl/RoomTable";
import newRequest from "../../utils/newRequest";

const Accommodation = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: allRoom,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: () =>
      newRequest.get(`room`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="container">
      <div className="create-new-room">
        <Button
          className="btn-create"
          variant="contained"
          color="success"
          onClick={() => navigate(`create`)}
          sx={{ margin: "20px" }}
        >
          Create new room
        </Button>
      </div>
      {isLoading ? (
        <>Loading</>
      ) : error ? (
        <>Error</>
      ) : (
        <>
          <RoomTable data={allRoom} />
        </>
      )}
    </div>
  );
};

export default Accommodation;
