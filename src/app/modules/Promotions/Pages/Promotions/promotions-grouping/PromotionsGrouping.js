import React, { useMemo } from "react";
import { usePromotionsUIContext } from "../PromotionsUIContext";

export function PromotionsGrouping() {
  // Promotions UI Context
  const promotionsUIContext = usePromotionsUIContext();
  const promotionsUIProps = useMemo(() => {
    return {
      ids: promotionsUIContext.ids,
      setIds: promotionsUIContext.setIds,
      openDeletePromotionsDialog:
        promotionsUIContext.openDeletePromotionsDialog,
      openFetchPromotionsDialog: promotionsUIContext.openFetchPromotionsDialog,
    };
  }, [promotionsUIContext]);

  return (
    <div className="form">
      <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
        <div className="col-xl-12">
          <div className="form-group form-group-inline">
            <div className="form-label form-label-no-wrap">
              <label className="-font-bold font-danger-">
                <span>
                  Selected records count: <b>{promotionsUIProps.ids.length}</b>
                </span>
              </label>
            </div>
            <div>
              &nbsp;
              <button
                type="button"
                className="btn btn-light-primary font-weight-bolder font-size-sm"
                onClick={promotionsUIProps.openFetchPromotionsDialog}
              >
                <i className="fa fa-stream"></i> Fetch Selected
              </button>
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
