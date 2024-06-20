/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import axios from "axios";

const toggle_status = (id) => {
  axios
    .get(
      `http://phplaravel-348716-1117663.cloudwaysapps.com/api/admin/promotions/toggle_promotion/${id}`
    )
    .then((resp) => {
      alert(resp.data.message);
    });
};

export const ActionsColumnFormatter = (row) => (
  <>
    <OverlayTrigger
      overlay={
        <Tooltip id="promotions-delete-tooltip">Toggle promotion</Tooltip>
      }
    >
      <a
        className="btn btn-icon btn-light btn-hover-danger btn-sm"
        onClick={() => toggle_status(row)}
      >
        <span className="svg-icon svg-icon-md svg-icon-danger">
          <i className="fa fa-toggle-on"></i>
        </span>
      </a>
    </OverlayTrigger>
  </>
);
