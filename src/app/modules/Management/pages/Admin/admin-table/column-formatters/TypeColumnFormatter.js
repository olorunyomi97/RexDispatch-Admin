// please be familiar with react-bootstrap-table-next column formaters
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
import React from "react";
import { AdminTypeCssClasses, AdminTypeTitles } from "../../AdminUIHelpers";

export function TypeColumnFormatter(cellContent, row) {
  console.log(row);
  if (row.role == "superAdmin") {
    return (
      <div>
        <span
          className={`label label-dot label-${AdminTypeCssClasses[0]} mr-2`}
        ></span>
        &nbsp;
        <span className={`font-bold font-${AdminTypeCssClasses[0]}`}>
          {AdminTypeTitles[0]}
        </span>
      </div>
    );
  } else if (row.role == "admin") {
    return (
      <div>
        <span
          className={`label label-dot label-${AdminTypeCssClasses[1]} mr-2`}
        ></span>
        &nbsp;
        <span className={`font-bold font-${AdminTypeCssClasses[1]}`}>
          {AdminTypeTitles[1]}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span
          className={`label label-dot label-${AdminTypeCssClasses[2]} mr-2`}
        ></span>
        &nbsp;
        <span className={`font-bold font-${AdminTypeCssClasses[2]}`}>
          {AdminTypeTitles[2]}
        </span>
      </div>
    );
  }
}
