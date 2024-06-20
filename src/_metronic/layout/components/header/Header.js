import React, { useMemo, useLayoutEffect } from "react";
import objectPath from "object-path";
import { useLocation } from "react-router-dom";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { Topbar } from "./Topbar";
import { HeaderMenuWrapper } from "./header-menu/HeaderMenuWrapper";
import { AnimateLoading } from "../../../_partials/controls";
import { BreadCrumbs } from "../../components/subheader/components/BreadCrumbs";
import {
  getBreadcrumbsAndTitle,
  useSubheader,
} from "../../_core/MetronicSubheader";

export function Header() {
  const uiService = useHtmlClassService();
  const location = useLocation();
  const subheader = useSubheader();

  const layoutProps = useMemo(() => {
    return {
      headerClasses: uiService.getClasses("header", true),
      headerAttributes: uiService.getAttributes("header"),
      headerContainerClasses: uiService.getClasses("header_container", true),
      menuHeaderDisplay: objectPath.get(
        uiService.config,
        "header.menu.self.display"
      ),
    };
  }, [uiService]);

  useLayoutEffect(() => {
    const aside = getBreadcrumbsAndTitle("kt_aside_menu", location.pathname);
    const header = getBreadcrumbsAndTitle("kt_header_menu", location.pathname);
    subheader.setBreadcrumbs(aside.breadcrumbs || header.breadcrumbs);
    subheader.setTitle(aside.title || header.title);
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <>
      {/*begin::Header*/}
      <div
        className={`header ${layoutProps.headerClasses}`}
        id="kt_header"
        {...layoutProps.headerAttributes}
      >
        {/*begin::Container*/}
        {layoutProps.menuHeaderDisplay && (
          <div
            className={` ${layoutProps.headerContainerClasses} d-flex align-items-stretch justify-content-between`}
          >
            <div className="d-flex align-items-center flex-wrap mr-1">
              <div className="d-flex align-items-baseline mr-5">
                <h5 className="text-dark font-weight-bold my-2 mr-5">
                  <>{subheader.title}</>
                  {/*<small></small>*/}
                </h5>
              </div>
              <BreadCrumbs items={subheader.breadcrumbs} />
            </div>
          </div>
        )}
        {!layoutProps.menuHeaderDisplay && <div className="mb-5"></div>}
        <AnimateLoading />
        {/*begin::Header Menu Wrapper*/}
        {/* {layoutProps.menuHeaderDisplay && <HeaderMenuWrapper />} */}
        {!layoutProps.menuHeaderDisplay && <div />}
        {/*end::Header Menu Wrapper*/}

        {/*begin::Topbar*/}
        <Topbar />
        {/*end::Topbar*/}
      </div>
      {/*end::Container*/}

      {/*end::Header*/}
    </>
  );
}
