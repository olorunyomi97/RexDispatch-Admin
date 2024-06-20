import React, { useMemo } from "react";
import { useBusinessUIContext } from "../BusinessUIContext";

export function BusinessGrouping() {
  // Business UI Context
  const businessUIContext = useBusinessUIContext();
  const businessUIProps = useMemo(() => {
    return {
      ids: businessUIContext.ids,
      setIds: businessUIContext.setIds,
      openDeleteBusinessDialog: businessUIContext.openDeleteBusinessDialog,
      openFetchBusinessDialog: businessUIContext.openFetchBusinessDialog,
      openUpdateBusinessStatusDialog:
        businessUIContext.openUpdateBusinessStatusDialog,
    };
  }, [businessUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="font-bold font-danger">
                <span>
                  Selected records count: <b>{businessUIProps.ids.length}</b>
                </span>
              </label>
            </div>
            <div>
              {/* <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={businessUIProps.openDeleteBusinessDialog}
              >
                <i className="fa fa-trash"></i> Delete All
              </button> */}
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={businessUIProps.openFetchBusinessDialog}
              >
                <i className="fa fa-stream"></i> Fetch Selected
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={businessUIProps.openUpdateBusinessStatusDialog}
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
