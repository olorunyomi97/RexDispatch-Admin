/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { useSelector } from "react-redux";

export function AsideMenuList({ layoutProps }) {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  if (user.is_nerdc == 1) {
    return (
      <>
        {/* begin::Menu Nav */}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          {/*begin::1 Level*/}
          <li
            className={`menu-item ${getMenuItemActive("/profile", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/profile">
              <span className="svg-icon menu-icon">
                <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Code/Settings4.svg")}
                />
              </span>
              <span className="menu-text">Profile</span>
            </NavLink>
          </li>

          {/* begin::section */}
          {/* <li className="menu-section ">
            <h4 className="menu-text">Books</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li> */}
          {/* end:: section */}

          {/* Error Pages */}
          {/*begin::1 Level*/}
          {/* <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/books",
              true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/books">
              <span className="svg-icon menu-icon">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
              </span>
              <span className="menu-text">Books</span>
              <i className="menu-arrow" />
            </NavLink>
            <div className="menu-submenu ">
              <i className="menu-arrow" />
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Books</span>
                  </span>
                </li> */}
          {/*begin::2 Level*/}
          {/* <li
                  className={`menu-item ${getMenuItemActive(
                    "/books/book_approval"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/books/book_approval">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Book Approval</span>
                  </NavLink>
                </li> */}
          {/*end::2 Level*/}
          {/* </ul>
            </div>
          </li> */}
          {/*end::1 Level*/}
        </ul>
        {/* end::Menu Nav */}
      </>
    );
  }

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link mb-2" to="/dashboard">
            <span className="svg-icon menu-icon">
              {/* <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} /> */}
              <i className="fas fa-tachometer-alt"></i>
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dispatch", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link mb-2" to="/dispatch">
            <span className="svg-icon menu-icon">
              {/* <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} /> */}
              <i className="fas fa-motorcycle"></i>
            </span>
            <span className="menu-text">Dispatch</span>
          </NavLink>
        </li>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/payments", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link mb-2" to="/payments">
            <span className="svg-icon menu-icon">
              {/* <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} /> */}
              <i className="fas fa-credit-card"></i>
            </span>
            <span className="menu-text">Payments</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/management/admins")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/management/admins">
            <span className="svg-icon menu-icon">
              {/* <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} /> */}
              <i className="fas fa-user-tie"></i>
            </span>
            <span className="menu-text">Admins</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(
            "/management/customers",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link mb-2" to="/management/customers">
            <span className="svg-icon menu-icon">
              {/* <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} /> */}
              <i className="fas fa-user-friends"></i>
            </span>
            <span className="menu-text">Customers</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(
            "/management/business",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link mb-2" to="/management/business">
            <span className="svg-icon menu-icon">
              {/* <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} /> */}
              <i className="fa fa-building"></i>
            </span>
            <span className="menu-text">Business</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/subscription", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link mb-2" to="/subscription">
            <span className="svg-icon menu-icon">
              {/* <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} /> */}
              <i className="fa fa-money-bill-wave"></i>
            </span>
            <span className="menu-text">Subscription</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/profile", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link mb-5" to="/profile">
            <span className="svg-icon menu-icon">
              {/* <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Settings4.svg")} /> */}
              <i className="fas fa-bars"></i>
            </span>
            <span className="menu-text">Account Preferences</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* end:: section */}
      </ul>
      {/* end::Menu Nav */}
    </>
  );
}
