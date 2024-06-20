import React from "react";
import {
  PromotionConditionCssClasses,
  PromotionConditionTitles,
} from "../../PromotionsUIHelpers";

export const ConditionColumnFormatter = (cellContent, row) => (
  <>
    <span
      className={`badge badge-${
        PromotionConditionCssClasses[row.condition]
      } badge-dot`}
    ></span>
    &nbsp;
    <span
      className={`font-bold font-${
        PromotionConditionCssClasses[row.condition]
      }`}
    >
      {PromotionConditionTitles[row.condition]}
    </span>
  </>
);
