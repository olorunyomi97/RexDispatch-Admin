import React, { useState, useEffect } from "react";
import axios from "axios";

const Subcard = () => {
  const [data, set_data] = useState();

  useEffect(async () => {
    const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/dispatch`);

    set_data(resp.data.data);
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-xl-4">
          {/*begin::Stats Widget 28*/}
          <div className="card card-custom card-stretch gutter-b">
            {/*begin::Body*/}
            <div className="card-body">
              <span
                className="font-weight-bolder font-size-h5"
                style={{ fontFamily: "Circular Std" }}
              >
                Active Subscribers &nbsp;&nbsp;&nbsp;
              </span>
              <span
                className="card-title font-weight-bolder text-dark-75 font-size-h2 mt-3 d-block"
                style={{ fontFamily: "Circular Std" }}
              >
                {"1110"}
                <i
                  className="icon far fa-money-bill-alt mr-5 float-right"
                  style={{ color: "#0059DE" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          {/*begin::Stats Widget 28*/}
          <div className="card card-custom card-stretch gutter-b">
            {/*begin::Body*/}
            <div className="card-body">
              <span
                className="font-weight-bolder font-size-h5"
                style={{ fontFamily: "Circular Std" }}
              >
                Basic Subscribers &nbsp;&nbsp;&nbsp;
              </span>
              <span
                className="card-title font-weight-bolder text-dark-75 font-size-h2 mt-3 d-block"
                style={{ fontFamily: "Circular Std" }}
              >
                {"520"}
                <i
                  className="icon far fa-money-bill-alt mr-5 float-right"
                  style={{ color: "#D8394C" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          {/*begin::Stats Widget 28*/}
          <div className="card card-custom card-stretch gutter-b">
            {/*begin::Body*/}
            <div className="card-body">
              <span
                className="font-weight-bolder font-size-h5"
                style={{ fontFamily: "Circular Std" }}
              >
                Premium Subscribers &nbsp;&nbsp;&nbsp;
              </span>
              <span
                className="card-title font-weight-bolder text-dark-75 font-size-h2 mt-3 d-block"
                style={{ fontFamily: "Circular Std" }}
              >
                {"590"}
                <i
                  className="icon far fa-money-bill-alt mr-5 float-right"
                  style={{ color: "#00114E" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcard;
