import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { PromotionsFilter } from "./promotions-filter/PromotionsFilter";
import { PromotionsTable } from "./promotions-table/PromotionsTable";
import { PromotionsGrouping } from "./promotions-grouping/PromotionsGrouping";
import { usePromotionsUIContext } from "./PromotionsUIContext";

export function PromotionsCard() {
  const promotionsUIContext = usePromotionsUIContext();
  const promotionsUIProps = useMemo(() => {
    return {
      ids: promotionsUIContext.ids,
      queryParams: promotionsUIContext.queryParams,
      setQueryParams: promotionsUIContext.setQueryParams,
      newPromotionButtonClick: promotionsUIContext.newPromotionButtonClick,
      openDeletePromotionsDialog:
        promotionsUIContext.openDeletePromotionsDialog,
      openFetchPromotionsDialog: promotionsUIContext.openFetchPromotionsDialog,
    };
  }, [promotionsUIContext]);

  return (
    <Card>
      <CardHeader title="Promotions list">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={promotionsUIProps.newPromotionButtonClick}
          >
            New Promotion
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <PromotionsFilter />
        {/* {promotionsUIProps.ids.length > 0 && (
          <>
            <PromotionsGrouping />
          </>
        )} */}
        <PromotionsTable />
      </CardBody>
    </Card>
  );
}
