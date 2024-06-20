import React from "react";

const StatusFormatter = (status) => {
  return (
    <p
      className="mt-4"
      style={{
        color:
          status === "delivered"
            ? "#0BE05C"
            : status === "in_transit"
            ? "#FFCE21"
            : status === "picked_up"
            ? "#0275d8"
            : "#FD3538",
      }}
    >
      {status === "bid_pending"
        ? "BID PENDING"
        : status === "rider_assigned"
        ? "RIDER ASSIGNED"
        : status === "picked_up"
        ? "PICKED UP"
        : status === "in_transit"
        ? "IN TRANSIT"
        : status === "delivered"
        ? "DELIVERED"
        : status === "cancelled"
        ? "CANCELLED"
        : " "}
    </p>
  );
};

export default StatusFormatter;
