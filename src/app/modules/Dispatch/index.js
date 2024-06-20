import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import axios from "axios";
import Action from "../../helpers/View";
import StatusFormatter from "../../helpers/StatusFormatter";
import DateFormatter from "../../helpers/DateFormatter";

const { SearchBar } = Search;
const Dispatch = (props) => {
  const [dispatches, set_dispatches] = useState([]);

  useEffect(async () => {
    const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/dispatch`);

    set_dispatches(resp.data.data);
  }, []);

  const columns = [
    { dataField: "order_number", text: "Order ID" },
    { dataField: "business[0].business_name", text: "Dispatch Company" },

    { dataField: "bid.price", text: "Amount" },
    { dataField: "senders_name", text: "Sender" },

    {
      dataField: "createdAt",
      text: "Date",
      formatter: DateFormatter,
    },
    { dataField: "status", text: "Status", formatter: StatusFormatter },

    { dataField: "_id", text: "", formatter: Action },
  ];

  return (
    <div>
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
    </div>
  );
};

export default Dispatch;
