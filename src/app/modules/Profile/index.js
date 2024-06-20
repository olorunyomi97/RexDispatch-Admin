import React, { useState } from "react";
import Change_password from "./change-password";
import Personal_information from "./personal-information";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useSelector } from "react-redux";

function Profile() {
  // Tabs
  const [tab, setTab] = useState("personal_information");
  const { user } = useSelector((state) => state.auth);
  const role = () => {
    if ((user.is_super_admin = "1")) {
      return "super_admin";
    } else if (user.is_admin === "1") {
      return "admin";
    } else {
      return "audit";
    }
  };

  const matches = window.matchMedia("(max-width: 500px)").matches;

  return (
    <div>
      {!matches ? (
        // {/*begin::Entry*/}
        <div className="d-flex flex-column-fluid">
          {/*begin::Container*/}
          <div className="container">
            {/*begin::Profile Email Settings*/}
            <div className="d-flex flex-row">
              {/*begin::Aside*/}
              <div
                className="flex-row-auto offcanvas-mobile w-250px w-xxl-350px"
                id="kt_profile_aside"
              >
                {/*begin::Profile Card*/}
                <div className="card card-custom card-stretch">
                  {/*begin::Body*/}
                  <div className="card-body pt-4">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
                        {/* <div
                        className="symbol-label"
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl(
                            "/media/users/300_21.jpg"
                          )})`,
                        }}
                      />
                      <i className="symbol-badge bg-success" />
                    </div> */}
                        {/* <div> */}
                        <a
                          href="#"
                          className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary"
                        >
                          {user.firstname} {user.lastname}
                        </a>
                        <div className="text-muted">
                          {user.is_super_admin == "1"
                            ? "Super Administrator"
                            : user.is_admin == "1"
                            ? "Administrator"
                            : "Auditor"}
                        </div>
                      </div>
                    </div>
                    {/*end::User*/}
                    {/*begin::Contact*/}
                    <div className="py-9">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="font-weight-bold mr-2">Email:</span>
                        <a href="#" className="text-muted text-hover-primary">
                          {user.email}
                        </a>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="font-weight-bold mr-2">Phone:</span>
                        <span className="text-muted">{user.phone}</span>
                      </div>
                    </div>
                    {/*end::Contact*/}
                    {/*begin::Nav*/}
                    <div className="navi navi-bold navi-hover navi-active navi-link-rounded">
                      <div className="navi-item mb-2">
                        <a
                          href="#"
                          className={`navi-link py-4 ${tab ===
                            "personal_information" && "active"}`}
                          onClick={() => setTab("personal_information")}
                        >
                          <span className="navi-icon mr-2">
                            <span className="svg-icon">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/General/User.svg*/}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <polygon points="0 0 24 0 24 24 0 24" />
                                  <path
                                    d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    opacity="0.3"
                                  />
                                  <path
                                    d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </span>
                          <span className="navi-text font-size-lg">
                            Personal Information
                          </span>
                        </a>
                      </div>
                      
                      <div className="navi-item mb-2">
                        <a
                          href="#"
                          className={`navi-link py-4 ${tab ===
                            "change_password" && "active"}`}
                          onClick={() => setTab("change_password")}
                        >
                          <span className="navi-icon mr-2">
                            <span className="svg-icon">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Shield-user.svg*/}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect x={0} y={0} width={24} height={24} />
                                  <path
                                    d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <path
                                    d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <path
                                    d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </span>
                          <span className="navi-text font-size-lg">
                            Change Password
                          </span>
                        </a>
                      </div>
                    </div>
                    {/*end::Nav*/}
                  </div>
                  {/*end::Body*/}
                </div>
                {/*end::Profile Card*/}
              </div>

              {tab === "personal_information" && <Personal_information />}
              {tab === "change_password" && <Change_password />}
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile-tabs">
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Personal Info">
              <Personal_information />
            </Tab>
            <Tab eventKey="password" title="Change Password">
              <Change_password />
            </Tab>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Profile;
