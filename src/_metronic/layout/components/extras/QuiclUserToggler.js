/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import objectPath from "object-path";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { UserProfileDropdown } from "./dropdowns/UserProfileDropdown";
import { useHistory } from "react-router-dom";

export function QuickUserToggler() {
  const { user } = useSelector((state) => state.auth);
  const history = useHistory();
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas:
        objectPath.get(uiService.config, "extras.user.layout") === "offcanvas",
    };
  }, [uiService]);

  const logoutClick = () => {
    history.push("/logout");
  };

  return (
    <>
      {layoutProps.offcanvas && (
        // <OverlayTrigger
        //   placement="bottom"
        //   overlay={<Tooltip id="quick-user-tooltip">View user</Tooltip>}
        // >
        <div className="topbar-item" onClick={logoutClick}>
          <div
            className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
            id="kt_quick_user_toggle"
          >
            <>
              <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
                {/* Hi, */}
              </span>
              <span className="text-danger font-weight-bolder font-size-base d-none d-md-inline mr-3">
                {/* {user.firstname} */} logout
              </span>
              {/* <span className="symbol symbol-35 symbol-light-danger">
                <span className="symbol-label font-size-h5 font-weight-bold">
                  <i className="fa fa-sign-out-alt" />
                </span>
              </span> */}
            </>
          </div>
        </div>
        // </OverlayTrigger>
      )}

      {/* {!layoutProps.offcanvas && <UserProfileDropdown />} */}
    </>
  );
}
