import React, { useMemo } from "react";
import { useDiscountsUIContext } from "../DiscountsUIContext";

export function DiscountsGrouping() {
  // Discounts UI Context
  const discountsUIContext = useDiscountsUIContext();
  const discountsUIProps = useMemo(() => {
    return {
      ids: discountsUIContext.ids,
      setIds: discountsUIContext.setIds,
      openDeleteDiscountsDialog: discountsUIContext.openDeleteDiscountsDialog,
      openFetchDiscountsDialog: discountsUIContext.openFetchDiscountsDialog,
      openUpdateDiscountsStatusDialog:
        discountsUIContext.openUpdateDiscountsStatusDialog,
    };
  }, [discountsUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="font-bold font-danger">
                <span>
                  Selected records count: <b>{discountsUIProps.ids.length}</b>
                </span>
              </label>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={discountsUIProps.openDeleteDiscountsDialog}
              >
                <i className="fa fa-trash"></i> Delete All
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={discountsUIProps.openFetchDiscountsDialog}
              >
                <i className="fa fa-stream"></i> Fetch Selected
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={discountsUIProps.openUpdateDiscountsStatusDialog}
              >
                <i className="fa fa-sync-alt"></i> Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
