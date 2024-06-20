import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import axios from "axios";
// import Action from "../../helpers/View";
import DateFormatter from "../../../helpers/DateFormatter";

const { SearchBar } = Search;

const Subtable = () => {
  const [subscribers, set_subscribers] = useState([]);

  useEffect(async () => {
    const resp = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/subscription/get_all_subscription`
    );

    set_subscribers(resp.data.data);
  }, []);

  const columns = [
    { dataField: "business[0].business_name", text: "Business" },
    { dataField: "business[0].email", text: "Email" },
    { dataField: "subscriptionType[0].plan", text: "Subscription Plan" },
    { dataField: "status", text: "Status" },
    {
      dataField: "renewal_date",
      text: "Renewal Date",
      formatter: DateFormatter,
    },
  ];

  return (
    <div>
      {/* begin::Card */}
      <div className="card card-custom mt-5">
        <div className="card-body">
          {/*begin: Datatable*/}
          <ToolkitProvider
            keyField="_id"
            data={subscribers}
            columns={columns}
            bootstrap4
            search
          >
            {(props) => (
              <div>
                <div className="d-flex">
                  <h4 className="card-label pt-4">All Subscribers</h4>
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

export default Subtable;
