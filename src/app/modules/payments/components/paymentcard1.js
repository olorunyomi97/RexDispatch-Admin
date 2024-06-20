import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Paymentcard1() {
  const [data, set_data] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/payment_dashboard`)
      .then((resp) => {
        set_data(resp.data.data);
      });
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
                Earnings &nbsp;&nbsp;&nbsp;
              </span>
              <span
                className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-3 mt-3 d-block"
                style={{ fontFamily: "Circular Std" }}
              >
                ₦{data ? new Intl.NumberFormat().format(data[0].earnings) : 0}
                <i
                  className="icon far fa-money-bill-alt mr-5 float-right"
                  style={{ color: "#0059DE" }}
                ></i>
              </span>
              <i
                className="fas fa-arrow-circle-up mr-2"
                style={{ color: "#008756" }}
              ></i>
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
                Total Payouts &nbsp;&nbsp;&nbsp;
              </span>
              <span
                className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-3 mt-3 d-block"
                style={{ fontFamily: "Circular Std" }}
              >
                ₦
                {data
                  ? new Intl.NumberFormat().format(data[1].total_payouts)
                  : 0}
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
                Active Subscriptions &nbsp;&nbsp;&nbsp;
              </span>
              <span
                className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-3 mt-3 d-block"
                style={{ fontFamily: "Circular Std" }}
              >
                ₦
                {data
                  ? new Intl.NumberFormat().format(
                      data[2].subscription_earnings
                    )
                  : 0}
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
}
