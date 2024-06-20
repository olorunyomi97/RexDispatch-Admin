import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import axios from "axios";
import Action from "../../../../helpers/View";
import StatusFormatter from "../../../../helpers/StatusFormatter";
import DateFormatter from "../../../../helpers/DateFormatter";
import ActiveFormatter from "../../../../helpers/ActiveFormatter";

function EachBusiness(props) {
  const { SearchBar } = Search;
  const [dispatches, set_dispatches] = useState([]);

  useEffect(async () => {
    const resp = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/get_riders/${props.match.params.id}`
    );

    set_dispatches(resp.data.data);
  }, []);

  const columns = [
    { dataField: "firstname", text: "Firstname" },
    { dataField: "lastname", text: "Lastname" },
    { dataField: "phone", text: "Phone" },
    { dataField: "license_number", text: "License" },
    { dataField: "vehicle_type", text: "Type" },
    { dataField: "is_active", text: "Status", formatter: ActiveFormatter },
    {
      dataField: "createdAt",
      text: "Date",
      formatter: DateFormatter,
    },
  ];

  return (
    <div>
      {/* first card */}
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="card dispatch_card p-5">
            <div className="mb-3">
              <p className="dispatch_header">BUSINESS OVERVIEW</p>
              <div className="row">
                <div className="col-md-3">
                  <p className="dispatch_details">Business Name</p>
                  <p className="dispatch_items">GIG Logistics</p>
                </div>
                <div className="col-md-3">
                  <p className="dispatch_details">Email Address</p>
                  <p className="dispatch_items">Gokada@gmail.com</p>
                </div>
                <div className="col-md-2">
                  <p className="dispatch_details">Phone Number</p>
                  <p className="dispatch_items">07051014243</p>
                </div>
                <div className="col-md-2">
                  <p className="dispatch_details">Date Joined</p>
                  <p className="dispatch_items">20-08-2021</p>
                </div>
                <div className="col-md-2">
                  <p className="dispatch_details">Location</p>
                  <p className="dispatch_items">male</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row mt-3 mb-3">
              <div className="col-md-3">
                <p className="dispatch_details">Address</p>
                <p className="dispatch_items">44, Ajose Herbaculate Way</p>
              </div>
              <div className="col-md-3">
                <p className="dispatch_details">Subscription Plan</p>
                <p className="dispatch_items">07051014243</p>
              </div>
              <div className="col-md-3">
                <p className="dispatch_details">Deliveries</p>
                <p className="dispatch_items">male</p>
              </div>
              <div className="col-md-3">
                <p className="dispatch_details">Total Amount</p>
                <p className="dispatch_items">date</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <p className="dispatch_details">Contact Person</p>
                <p className="dispatch_items">44, Ajose Herbaculate Way</p>
              </div>
              <div className="col-md-3">
                <p className="dispatch_details">Contact Phone</p>
                <p className="dispatch_items">07051014243</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second card */}
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="card dispatch_card p-5">
            <p className="dispatch_header">DOCUMENTS</p>
            <div className="row">
              <div className="col-md-3">
                <p className="dispatch_details">ID</p>
                <p className="dispatch_items">#ND1283</p>
              </div>
              <div className="col-md-3">
                <p className="dispatch_details">ID Issued Date</p>
                <p className="dispatch_items">28.03.2020</p>
              </div>
              <div className="col-md-3">
                <p className="dispatch_details">ID Expiry Date</p>
                <p className="dispatch_items">28.03.2021</p>
              </div>
              <div className="col-md-3">
                <p className="dispatch_details">Delivery Location</p>
                <p className="dispatch_items">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* begin::Table */}
      <div className="card card-custom">
        <div className="card-body">
          {/*begin: Datatable*/}
          <ToolkitProvider
            keyField="_id"
            data={dispatches}
            columns={columns}
            bootstrap4
            search
          >
            {(props) => (
              <div>
                <div className="d-flex">
                  <h4 className="card-label pt-4">All Riders</h4>
                  <div className="col-lg-3 col-md-4 ml-auto">
                    <SearchBar
                      {...props.searchProps}
                      className="form-control"
                    />
                  </div>
                </div>
                <BootstrapTable
                  {...props.baseProps}
                  wrapperClasses="table-responsive"
                  classes="table table-striped  table-vertical-center mt-5 mb-5"
                  id="kt_datatable_2"
                  bordered={false}
                  pagination={paginationFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
          {/*end: Datatable*/}
        </div>
      </div>
      {/*end::Table*/}
    </div>
  );
}

export default EachBusiness;
