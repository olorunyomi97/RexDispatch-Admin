import React, { Component } from "react";
import DateFormatter from "../../../helpers/DateFormatter";
import StatusFormatter from "../../../helpers/StatusFormatter";
import "./card.css";

const Card1 = (props) => {
  const data = props.data;

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card dispatch_card p-5">
          <p className="dispatch_header">DELIVERY ORDER OVERVIEW</p>
          <div className="row">
            <div className="col-md-4 col-lg-2 ">
              <p className="dispatch_details">Order Number</p>
              <p className="dispatch_items">{data && data.order_number}</p>
            </div>
            <div className="col-md-4 col-lg-3 ">
              <p className="dispatch_details">Date</p>
              <p className="dispatch_items">
                {data && DateFormatter(data.createdAt)}
              </p>
            </div>
            <div className="col-md-4 col-lg-3 ">
              <p className="dispatch_details">Dispatch Company</p>
              <p className="dispatch_items">
                {data &&
                data.business &&
                data.business.length &&
                data.business[0].business_name
                  ? data.business[0].business_name
                  : " "}
              </p>
            </div>

            <div className="col-md-4 col-lg-2 ">
              <p className="dispatch_details">Amount</p>
              <p className="dispatch_items">
                {data && data.bid && data.bid.price}
              </p>
            </div>
            <div className="col-md-4 col-lg-2 ">
              <p className="dispatch_details">Status</p>
              <div className="dispatch_items debit" style={{ marginTop: -12 }}>
                {StatusFormatter(data.status)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
