// please be familiar with react-bootstrap-table-next column formaters
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
import React from "react";
import {
  DiscountStatusCssClasses,
  DiscountStatusTitles,
} from "../../DiscountsUIHelpers";

export function StatusColumnFormatter(cellContent, row) {
  if (row.discount_status === "Expired") {
    return (
      <div className="">
        {" "}
        <span
          className={`label label-lg label-light-${DiscountStatusCssClasses[0]} label-inline`}
        >
          {DiscountStatusTitles[0]}
        </span>
      </div>
    );
  } else if (row.discount_status === "In Progress") {
    return (
      <div className="">
        {" "}
        <span
          className={`label label-lg label-light-${DiscountStatusCssClasses[1]} label-inline`}
        >
          {DiscountStatusTitles[1]}
        </span>
      </div>
    );
  } else if (row.discount_status === "Disabled") {
    return (
      <div className="">
        {" "}
        <span
          className={`label label-lg label-light-${DiscountStatusCssClasses[2]} label-inline`}
        >
          {DiscountStatusTitles[2]}
        </span>
      </div>
    );
  } else {
    return (
      <div className="">
        {" "}
        <span
          className={`label label-lg label-light-${DiscountStatusCssClasses[3]} label-inline`}
        >
          {DiscountStatusTitles[3]}
        </span>
      </div>
    );
  }
}
