import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Button from "@mui/material/Button";
import TourTable from "../../components/tourControl/TourTable";
import newRequest from "../../utils/newRequest";

const TourTravel = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: allTour,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: () =>
      newRequest.get(`tour`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div>
      <Button
        className="btn-create"
        variant="contained"
        color="success"
        onClick={() => navigate(`create`)}
        sx={{ margin: "20px" }}
      >
        Create new tour
      </Button>
      {isLoading ? (
        <>Loading</>
      ) : error ? (
        <>Error</>
      ) : (
        <>
          <TourTable data={allTour} />
        </>
      )}
    </div>
  );
};

export default TourTravel;
