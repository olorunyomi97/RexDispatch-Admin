import React, { useMemo } from "react";
import { useAdminsUIContext } from "../AdminUIContext";

export function AdminsGrouping() {
  // Admins UI Context
  const adminsUIContext = useAdminsUIContext();
  const adminsUIProps = useMemo(() => {
    return {
      ids: adminsUIContext.ids,
      setIds: adminsUIContext.setIds,
      openDeleteAdminsDialog: adminsUIContext.openDeleteAdminsDialog,
      openFetchAdminsDialog: adminsUIContext.openFetchAdminsDialog,
      openUpdateAdminsStatusDialog:
        adminsUIContext.openUpdateAdminsStatusDialog,
    };
  }, [adminsUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="font-bold font-danger">
                <span>
                  Selected records count: <b>{adminsUIProps.ids.length}</b>
                </span>
              </label>
            </div>
            <div>
              {/* <button
                type="button"
                className="btn btn-danger font-weight-bolder font-size-sm"
                onClick={adminsUIProps.openDeleteAdminsDialog}
              >
                <i className="fa fa-trash"></i> Delete All
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={adminsUIProps.openFetchAdminsDialog}
              >
                <i className="fa fa-stream"></i> Fetch Selected
              </button> */}
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={adminsUIProps.openUpdateAdminsStatusDialog}
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
