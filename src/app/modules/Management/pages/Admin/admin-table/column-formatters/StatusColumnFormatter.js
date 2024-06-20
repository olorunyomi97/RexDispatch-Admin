// please be familiar with react-bootstrap-table-next column formaters
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
import React from "react";
import { AdminStatusCssClasses, AdminStatusTitles } from "../../AdminUIHelpers";

export function StatusColumnFormatter(cellContent, row) {
  const getLabelCssClasses = () => {
    if (undefined) {
      // console.log(row.is_active);
      return `label label-lg label-light-${AdminStatusCssClasses[0]} label-inline`;
    } else if (row.is_active == true) {
      // console.log(row.is_active);
      return `label label-lg label-light-${AdminStatusCssClasses[1]} label-inline`;
    } else {
      return `label label-lg label-light-${AdminStatusCssClasses[0]} label-inline`;
    }
  };
  return (
    <span className={getLabelCssClasses()}>
      {row.is_active == true ? AdminStatusTitles[1] : AdminStatusTitles[0]}
    </span>
  );
}
