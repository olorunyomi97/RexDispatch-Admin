import React, { useMemo, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import { DiscountsFilter } from "./discounts-filter/DiscountsFilter";
import { DiscountsTable } from "./discounts-table/DiscountsTable";
import { DiscountsGrouping } from "./discounts-grouping/DiscountsGrouping";
import { useDiscountsUIContext } from "./DiscountsUIContext";
import { DiscountEditDialog } from "./discount-edit-dialog/DiscountEditDialog";

export function DiscountsCard() {
  const discountsUIContext = useDiscountsUIContext();
  const discountsUIProps = useMemo(() => {
    return {
      ids: discountsUIContext.ids,
      newDiscountButtonClick: discountsUIContext.newDiscountButtonClick,
    };
  }, [discountsUIContext]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Card>
      <CardHeader title="Discounts list">
        <DiscountEditDialog show={show} onHide={handleClose} />
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleShow}
          >
            New Discount
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {/* <DiscountsFilter /> */}
        {/* {discountsUIProps.ids.length > 0 && <DiscountsGrouping />} */}
        <DiscountsTable />
      </CardBody>
    </Card>
  );
}
