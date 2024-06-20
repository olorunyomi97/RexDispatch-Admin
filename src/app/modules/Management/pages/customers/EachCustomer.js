import React, { useState, useEffect } from "react";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import axios from "axios";
import Action from "../../../../helpers/View";
import StatusFormatter from "../../../../helpers/StatusFormatter";
import DateFormatter from "../../../../helpers/DateFormatter";

const EachCustomer = (props) => {
  const { SearchBar } = Search;
  const [dispatches, set_dispatches] = useState([]);

  useEffect(async () => {
    const resp = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/dispatch_customer/${props.match.params.id}`
    );

    set_dispatches(resp.data.data);
  }, []);

  const columns = [
    { dataField: "order_number", text: "Order ID" },
    { dataField: "delivery_address", text: "Delivery Location" },

    { dataField: "bid.price", text: "Amount" },

    { dataField: "business[0].business_name", text: "Dispatch Company" },

    {
      dataField: "createdAt",
      text: "Date",
      formatter: DateFormatter,
    },
    { dataField: "status", text: "Status", formatter: StatusFormatter },

    // { dataField: "_id", text: "", formatter: Action },
  ];

  return (
    <>
      {/* // start profile overview */}
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="card dispatch_card p-5">
            <div className="mb-3">
              <p className="dispatch_header">PROFILE OVERVIEW</p>
              <div className="row">
                <div className="col-md-2">
                  <p className="dispatch_details">First Name</p>
                  <p className="dispatch_items">Bigoloo</p>
                </div>
                <div className="col-md-2">
                  <p className="dispatch_details">Last Name</p>
                  <p className="dispatch_items">Vic O</p>
                </div>
                <div className="col-md-2">
                  <p className="dispatch_details">Email Address</p>
                  <p className="dispatch_items">Gokada@gmail.com</p>
                </div>
                <div className="col-md-2">
                  <p className="dispatch_details">Phone Number</p>
                  <p className="dispatch_items">07051014243</p>
                </div>
                <div className="col-md-2">
                  <p className="dispatch_details">Gender</p>
                  <p className="dispatch_items">male</p>
                </div>
                <div className="col-md-2">
                  <p className="dispatch_details">Date of Birth</p>
                  <p className="dispatch_items">date</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <p className="dispatch_details">Address</p>
                <p className="dispatch_items">44, Ajose Herbaculate Way</p>
              </div>
              <div className="col-md-2">
                <p className="dispatch_details">Location</p>
                <p className="dispatch_items">Gokada@gmail.com</p>
              </div>
              <div className="col-md-2">
                <p className="dispatch_details">Date Joined</p>
                <p className="dispatch_items">07051014243</p>
              </div>
              <div className="col-md-2">
                <p className="dispatch_details">Transactions</p>
                <p className="dispatch_items">male</p>
              </div>
              <div className="col-md-2">
                <p className="dispatch_details">Total Amount</p>
                <p className="dispatch_items">date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // end profile overview */}

      {/* // start all dispatches */}
      {/* begin::Card */}
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
                  <h4 className="card-label pt-4">All Dispatches</h4>
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
      {/*end::Card*/}
    </>
  );
};

export default EachCustomer;
