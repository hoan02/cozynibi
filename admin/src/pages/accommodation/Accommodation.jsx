import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Button from "@mui/material/Button";
import RoomTable from "../../components/roomControl/RoomTable";
import newRequest from "../../utils/newRequest";
import "./Accommodation.scss";

const Accommodation = () => {
  const queryClient = useQueryClient();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: allRoom,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: () =>
      newRequest.get(`room`).then((res) => {
        setData(res.data);
        return res.data;
      }),
  });

  return (
    <div className="container">
      <h1>Accommodation</h1>
      <div className="create-new-room">
        <Button
          className="btn-create"
          variant="contained"
          color="success"
          onClick={() => navigate(`create`)}
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
