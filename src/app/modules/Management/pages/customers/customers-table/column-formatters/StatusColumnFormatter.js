// please be familiar with react-bootstrap-table-next column formaters
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
import React from "react";
import {
  CustomerStatusCssClasses,
  CustomerStatusTitles,
} from "../../CustomersUIHelpers";

export function StatusColumnFormatter(cellContent, row) {
  const getLabelCssClasses = () => {
    if (row.is_active == true) {
      return `label label-lg label-light-${CustomerStatusCssClasses[1]} label-inline`;
    } else {
      return `label label-lg label-light-${CustomerStatusCssClasses[0]} label-inline`;
    }
  };
  return (
    <span className={getLabelCssClasses()}>
      {row.is_active == true
        ? CustomerStatusTitles[1]
        : CustomerStatusTitles[0]}
    </span>
  );
}
