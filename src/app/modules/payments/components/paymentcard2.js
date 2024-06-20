import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import axios from "axios";
import DateFormatter from "../../../helpers/DateFormatter";

const { SearchBar } = Search;

const Paymentcard2 = () => {
  const [transactions, set_transactions] = useState([]);

  useEffect(async () => {
    const resp = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/get_payments`
    );

    set_transactions(resp.data.data);
  }, []);

  const ActiveFormatter = (row) => {
    return (
      <p
        className="mt-4"
        style={{
          color: row === "success" ? "#0BE05C" : "#FD3538",
        }}
      >
        {row === "success" ? "Success" : "Failed"}
      </p>
    );
  };

  const CommissionFormatter = (row) => {
    return row ? row : 0;
  };

  const columns = [
    { dataField: "payment_ref", text: "Reference" },
    {
      dataField: "business[0].business_name",
      text: "Name",
      formatter: (cell, row) => {
        return (
          <div>
            {row.business.length
              ? row.business[0].business_name
              : row.customer.length
              ? `${row.customer[0].firstname} ${row.customer[0].lastname}`
              : " "}
          </div>
        );
      },
    },
    {
      dataField: "business[0].email",
      text: "Email",
      formatter: (cell, row) => {
        return (
          <div>
            {row.business.length
              ? row.business[0].email
              : row.customer.length
              ? `${row.customer[0].email} `
              : " "}
          </div>
        );
      },
    },
    {
      dataField: "business[0].phone",
      text: "Phone",
      formatter: (cell, row) => {
        return (
          <div>
            {row.business.length
              ? row.business[0].phone
              : row.customer.length
              ? `${row.customer[0].phone} `
              : " "}
          </div>
        );
      },
    },
    { dataField: "currency", text: "Currency" },
    { dataField: "amount", text: "Amount" },

    {
      dataField: "rex_commission",
      text: "Commission (%)",
      formatter: CommissionFormatter,
    },
    { dataField: "payment_channel", text: "Channel" },
    { dataField: "status", text: "Status", formatter: ActiveFormatter },
    { dataField: "cratedAt", text: "Date", formatter: DateFormatter },
  ];

  return (
    <div>
      {/* begin::Card */}
      <div className="card card-custom">
        <div className="card-body">
          {/*begin: Datatable*/}
          <ToolkitProvider
            keyField="_id"
            data={transactions}
            columns={columns}
            bootstrap4
            search
          >
            {(props) => (
              <div>
                <div className="d-flex">
                  <h4 className="card-label pt-4">All Transactions</h4>
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
    </div>
  );
};

export default Paymentcard2;
