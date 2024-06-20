import React from "react";
import {
  PromotionStatusCssClasses,
  PromotionStatusTitles,
} from "../../PromotionsUIHelpers";

export const StatusColumnFormatter = (cellContent, row) => {
  if (row.promo_status === "Expired") {
    return (
      <div className="">
        {" "}
        <span
          className={`label label-lg label-light-${PromotionStatusCssClasses[0]} label-inline`}
        >
          {PromotionStatusTitles[0]}
        </span>
      </div>
    );
  } else if (row.promo_status === "In Progress") {
    return (
      <div className="">
        {" "}
        <span
          className={`label label-lg label-light-${PromotionStatusCssClasses[1]} label-inline`}
        >
          {PromotionStatusTitles[1]}
        </span>
      </div>
    );
  } else if (row.promo_status === "Disabled") {
    return (
      <div className="">
        {" "}
        <span
          className={`label label-lg label-light-${PromotionStatusCssClasses[2]} label-inline`}
        >
          {PromotionStatusTitles[2]}
        </span>
      </div>
    );
  } else {
    return (
      <div className="">
        {" "}
        <span
          className={`label label-lg label-light-${PromotionStatusCssClasses[3]} label-inline`}
        >
          {PromotionStatusTitles[3]}
        </span>
      </div>
    );
  }
};
