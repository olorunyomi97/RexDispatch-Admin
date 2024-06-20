// please be familiar with react-bootstrap-table-next column formaters
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import axios from "axios";

const toggle_status = (id) => {
  axios
    .get(
      `http://phplaravel-348716-1117663.cloudwaysapps.com/api/admin/discounts/toggle_discount/${id}`
    )
    .then((resp) => {
      alert(resp.data.message);
    });
};

export function ActionsColumnFormatter(row) {
  return (
    <>
      <OverlayTrigger
        overlay={
          <Tooltip id="promotions-delete-tooltip">Toggle discount</Tooltip>
        }
      >
        <a
          className="btn btn-icon btn-light btn-hover-primary btn-sm"
          onClick={() => toggle_status(row)}
        >
          <span className="svg-icon svg-icon-md svg-icon-light">
            <i className="fa fa-toggle-on"></i>
          </span>
        </a>
      </OverlayTrigger>
    </>
  );
}
