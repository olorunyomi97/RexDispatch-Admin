import React from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

function Action(id) {
  return (
    <div>
      {/* <Link
        title="View Transaction"
        className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
        to={window.location.pathname + `-view/${id}`}
      >
        <span className="svg-icon svg-icon-md svg-icon-primary">
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")} />
        </span>
      </Link> */}
      <Link to={window.location.pathname + `-view/${id}`}>
        <div
          style={{
            backgroundColor: "rgba(117, 117, 158, 0.4)",
            display: "flex",

            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            height: 17,
            paddingVertical: 2,
            paddingHorizontal: 4,
          }}
        >
          <i
            style={{
              color: "#75759E",
              fontSize: 12,
              textAlign: "center",
            }}
            className={"fa fa-chevron-right"}
          />
        </div>
      </Link>
    </div>
  );
}

export default Action;
