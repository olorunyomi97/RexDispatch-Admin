import React, { useState, useEffect } from "react";
import axios from "axios";
import "./statsone.css";

const Stats1 = () => {
  const [dashboard_params, set_dashboard_params] = useState(null);

  useEffect(async () => {
    const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard`);

    set_dashboard_params(resp.data.dashboard.data);
  }, []);

  console.log(dashboard_params);
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
                Total Users &nbsp;&nbsp;&nbsp;
              </span>
              <span
                className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-3 mt-3 d-block"
                style={{ fontFamily: "Circular Std" }}
              >
                {dashboard_params ? dashboard_params[0].no_of_users : 0}
                <i
                  className="icon fas fa-user-friends mr-5 float-right"
                  style={{ color: "#0BE05C" }}
                ></i>
              </span>
              <small style={{ color: "#8C97AC" }}>100 Sign-ups this week</small>
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
                Total Business Accounts &nbsp;&nbsp;&nbsp;
              </span>
              <span
                className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-3 mt-3 d-block"
                style={{ fontFamily: "Circular Std" }}
              >
                {dashboard_params ? dashboard_params[1].no_of_business : 0}
                <i
                  className="icon fas fa-user-friends mr-5 float-right"
                  style={{ color: "#B11899" }}
                ></i>
              </span>
              <small style={{ color: "#8C97AC" }}>100 Sign-ups this week</small>
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
                Total Dispatches &nbsp;&nbsp;&nbsp;
              </span>
              <span
                className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-3 mt-3 d-block"
                style={{ fontFamily: "Circular Std" }}
              >
                {dashboard_params ? dashboard_params[2].no_of_parcels : 0}
                <i
                  className="icon fas fa-exchange-alt mr-5 float-right"
                  style={{ color: "#F2952D" }}
                ></i>
              </span>
              <i
                className="fas fa-arrow-circle-down mr-2"
                style={{ color: "#DC3039" }}
              ></i>
              <small style={{ color: "#8C97AC" }}>
                31% compared to last week
              </small>
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
                Earnings &nbsp;&nbsp;&nbsp;
              </span>
              <span
                className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-3 mt-3 d-block"
                style={{ fontFamily: "Circular Std" }}
              >
                ₦
                {dashboard_params
                  ? new Intl.NumberFormat().format(dashboard_params[4].earnings)
                  : 0}
                <i
                  className="icon far fa-money-bill-alt mr-5 float-right"
                  style={{ color: "#0059DE" }}
                ></i>
              </span>
              <i
                className="fas fa-arrow-circle-up mr-2"
                style={{ color: "#008756" }}
              ></i>
              <small style={{ color: "#8C97AC" }}>100 Sign-ups this week</small>
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
                {dashboard_params
                  ? new Intl.NumberFormat().format(
                      dashboard_params[5].total_payouts
                    )
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
                {dashboard_params ? dashboard_params[3].no_of_subscription : 0}
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

export default Stats1;
