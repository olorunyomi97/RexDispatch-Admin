import React, { useState, useEffect } from "react";
import axios from "axios";
import SubscriptionModal from "./newplanmodal";
import "./sub.css";

const Subplans = () => {
  const [showPlanModal, setShowplanmodal] = useState(false);
  const [plans, setPlans] = useState([]);

  useEffect(async () => {
    const resp = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/subscription_type/get_subscription_type`
    );

    setPlans(resp.data.data);
  }, []);

  const modalClose = () => {
    setShowplanmodal(false);
  };

  const modalShow = () => {
    setShowplanmodal(true);
  };

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-lg-9">
          <p className="user_signup_subtext pl-3 mt-3 mb-5 debit">
            Subscription Plans
          </p>
        </div>
        <div className="col-lg-3">
          <div style={{ textAlign: "center" }} className="ml-auto">
            <button className=" mb-5 new_plan_btn" onClick={modalShow}>
              Add New Plans
            </button>
            <SubscriptionModal
              showPlanModal={showPlanModal}
              modalClose={modalClose}
            />
          </div>
        </div>
      </div>
      <div className="row">
        {plans &&
          plans.map((data) => {
            return (
              <div className="col-xl-4" key={data._id}>
                <div className="card card-custom card-stretch gutter-b">
                  <div className="card-body">
                    <div>
                      <p
                        className="user_signup_subtext pl-3 mb-1"
                        style={{ textTransform: "capitalize" }}
                      >
                        {data.plan} Plan
                      </p>
                      <p className="user_signup_item pl-3 mb-1">price</p>
                      <p className="user_signup_subtext pl-3">
                        ₦ {new Intl.NumberFormat().format(data.amount)}/month
                      </p>
                    </div>
                    <hr style={{ width: "90%" }} />
                    <div>
                      <p className="user_signup_subtext pl-3">
                        <i
                          className="fas fa-check mr-2"
                          style={{ color: "#0BE05C" }}
                        ></i>
                        1-{data.dispatch_rides} dispatch rides
                      </p>
                      <p className="user_signup_subtext pl-3">
                        <i
                          className="fas fa-check mr-2"
                          style={{ color: "#0BE05C" }}
                        ></i>
                        Max of {data.features} deliveries monthly
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <p
                        className="upgrade pl-5"
                        style={{ textAlign: "center" }}
                      >
                        Update this Plan
                      </p>
                    </div>
                    <div className="col-xl-6">
                      <p className="red">Delete</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Subplans;
