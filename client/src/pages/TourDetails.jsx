import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import newRequest from "../utils/newRequest";

const TourDetails = () => {
  const { id } = useParams();
  const [dataTour, setDataTour] = useState();
  const [dataOther, setDataOther] = useState();

  useEffect(() => {
    try {
      newRequest.get(`tour/${id}`).then((res) => {
        setDataTour(res.data);
      });
    } catch (err) {
      console.log(err);
    }

    try {
      newRequest.get(`tour`).then((res) => {
        setDataOther(res.data.reverse());
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(dataOther);

  return (
    <>
      {dataTour && (
        <div className="tour-details">
          <div class="title-detail-tour">
            <div class="container">
              <h1 class="titH1-dt">
                <span>{dataTour.name}</span>
              </h1>
              <div class="code-tour">
                <span>(Tour code: {dataTour.tourCode})</span>
              </div>
            </div>
          </div>
          <div class="list-detail-tour-avt">
            <div class="avt-dt-i">
              <img src={dataTour.images[0].url} alt="" />
            </div>
            <div class="avt-dt-i">
              <img src={dataTour.images[1].url} alt="" />
            </div>
            <div class="avt-dt-i">
              <img src={dataTour.images[2].url} alt="" />
            </div>
          </div>
          <div class="page-detail-tour bg-abe">
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <h2 class="titH2">Trip Schedule</h2>
                  <div class="schedule">
                    <table>
                      {dataTour.tripSchedules.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td>{item.time}</td>
                            <td>{item.content}</td>
                          </tr>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <h2 class="titH2">Inclusions</h2>
                  <div class="list-dotted">
                    <ul>
                      {dataTour.inclusions.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                </div>
                <div class="col-sm-4">
                  <h2 class="titH2">Exclusions</h2>
                  <div class="list-dotted">
                    <ul>
                      {dataTour.exclusions.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                </div>
                <div class="col-sm-4">
                  <h2 class="titH2">Price</h2>
                  <div class="list-dotted">
                    <ul>
                      {dataTour.tourPrice.map((item, index) => {
                        return (
                          <li key={index}>
                            From {item.numberPerson} persons: US${" "}
                            {item.pricePerPerson} /per person
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="other">
                    <h2 class="titH2-o">
                      <span>Other Tours</span>
                    </h2>

                    <div class="list-other">
                      <ul>
                        {dataOther?.map((item) => {
                          return (
                            <li key={item._id}>
                              <div class="item">
                                <a href={`/tour-travel/${item._id}`} class="avt">
                                  <img src={item.images[0].url} alt="" />
                                </a>
                                <div class="desc">
                                  <div class="desc-midle">
                                    <h3>
                                      <a href={`/tour-travel/${item._id}`}>
                                        {item.name}
                                      </a>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourDetails;
