import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import NewRequest from "../../utils/NewRequest";
import CreateBanner from "../../components/createBanner/CreateBanner";
import UpdateBanner from "../../components/updateBanner/UpdateBanner";
import ToastService from "../../utils/ToastService";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  const bannerId = useParams();
  const queryClient = useQueryClient();

  // Get all banner
  const { isLoading, error, data } = useQuery({
    queryKey: ["banners"],
    queryFn: () =>
      NewRequest.get(`/banners/all`).then((res) => {
        return res.data;
      }),
  });

  // Delete banner
  const deleteBanner = useMutation({
    mutationFn: (id) => {
      return NewRequest.delete(`/banners/delete/${id}`);
    },
    onSuccess: () => {
      ToastService.success("Delete banner successfully!");
      queryClient.invalidateQueries(["banners"]);
    },
  });

  const handleDelete = (id) => {
    deleteBanner.mutate(id);
  };

  return (
    <div className="banner">
      <h1>Quản lý banner</h1>
      <div className="container">
        <div className="create-banner">
          <button>
            <Link to="create">Create Banner</Link>
          </button>
        </div>
        <div className="render-banner">
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error.message}</div>
          ) : (
            data.map((banner) => {
              return (
                <div key={banner._id} className="item">
                  <div className="element">
                    <Link to={`/banners/${banner._id}`}>
                      <img src={banner.image.url} alt={banner.title} />
                    </Link>
                  </div>
                  <div className="element">
                    <p>{banner.title}</p>
                  </div>
                  <div className="element">
                    <p>{banner.slug}</p>
                  </div>
                  <div className="element">
                    <button>
                      <Link to={`update/${banner._id}`}>Edit</Link>
                    </button>
                  </div>
                  <div className="element">
                    <button onClick={() => handleDelete(banner._id)}>Delete</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
