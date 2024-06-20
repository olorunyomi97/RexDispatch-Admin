import React from "react";

export default function ActiveFormatter(row) {
  return (
    <p
      className="mt-3"
      style={{
        color: row ? "#0BE05C" : "#FD3538",
      }}
    >
      {row ? "Active" : "In active"}
    </p>
  );
}
