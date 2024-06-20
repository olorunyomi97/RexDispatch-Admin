import React from "react";
// import Delivery from "./subcomponents/delivery";
// import Pickup from "./subcomponents/pickup";

const Card2 = (props) => {
  const data = props.data;

  return (
    <div>
      <p className="location mt-5">Location </p>
      <div className="row mt-5 mb-5">
        <div className="col-md-6">
          <div className="card p-5">
            <p className="user_signups p-3">PICKUP DETAILS</p>
            <div>
              <p className="user_signup_item pl-3">Package Type</p>
              <p className="user_signup_subtext pl-3">
                {data && data.package_type}
              </p>
            </div>
            <hr style={{ width: "90%" }} />
            <div>
              <p className="user_signup_item pl-3">Nearest Landmark</p>
              <p className="user_signup_subtext pl-3">
                {data && data.nearest_landmark}
              </p>
            </div>
            <hr style={{ width: "90%" }} />
            <div>
              <p className="user_signup_item pl-3">Sender's Name</p>
              <p className="user_signup_subtext pl-3">
                {data && data.senders_name}
              </p>
            </div>
            <hr style={{ width: "90%" }} />
            <div>
              <p className="user_signup_item pl-3">Phone Number</p>
              <p className="user_signup_subtext pl-3">
                {data && data.senders_phone}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-5">
            <p className="user_signups p-3">DELIVERY DETAILS</p>
            <div>
              <p className="user_signup_item pl-3">Delivery Address</p>
              <p className="user_signup_subtext pl-3">
                {data && data.delivery_address}
              </p>
            </div>
            <hr style={{ width: "90%" }} />
            <div>
              <p className="user_signup_item pl-3">Nearest Landmark</p>
              <p className="user_signup_subtext pl-3">
                {data && data.notable_landmark}
              </p>
            </div>
            <hr style={{ width: "90%" }} />
            <div>
              <p className="user_signup_item pl-3">Recievers Name</p>
              <p className="user_signup_subtext pl-3">
                {data && data.recipient_name}
              </p>
            </div>
            <hr style={{ width: "90%" }} />
            <div>
              <p className="user_signup_item pl-3">Phone Number</p>
              <p className="user_signup_subtext pl-3">
                {data && data.recipient_phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
