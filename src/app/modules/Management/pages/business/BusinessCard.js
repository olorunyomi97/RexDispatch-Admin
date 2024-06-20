import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { BusinessFilter } from "./business-filter/BusinessFilter";
import { BusinessTable } from "./business-table/BusinessTable";
import { BusinessGrouping } from "./business-grouping/BusinessGrouping";
import { useBusinessUIContext } from "./BusinessUIContext";

export function BusinessCard() {
  const businessUIContext = useBusinessUIContext();
  const businessUIProps = useMemo(() => {
    return {
      ids: businessUIContext.ids,
      newBusinessButtonClick: businessUIContext.newBusinessButtonClick,
    };
  }, [businessUIContext]);

  return (
    <Card>
      <CardHeader title="Business list">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={businessUIContext.newBusinessButtonClick}
          >
            New Business
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <BusinessFilter />
        {businessUIProps.ids.length > 0 && <BusinessGrouping />}
        <BusinessTable />
      </CardBody>
    </Card>
  );
}
