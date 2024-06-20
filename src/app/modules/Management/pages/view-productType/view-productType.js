import React, { Component } from "react";
import ToolkitProvider from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

class ViewProductType extends Component {
  state = {
    product_types: [],
  };

  render() {
    const product_types = this.state.product_types;
    const columns = [
      { dataField: "name", text: "Firstname" },
      { dataField: "lastname", text: "Lastname" },

      { dataField: "email", text: "Email" },
      { dataField: "phone", text: "Phone" },
      //   { dataField: "auction_artist_id", text: "Actions", formatter: Action },
    ];
    return (
      <div>
        {/* begin::Card */}
        <div className="card card-custom">
          <div className="card-header flex-wrap border-0 pt-6 pb-0">
            <div className="card-title">
              <h3 className="card-label">Auction Artists</h3>
            </div>
            <div className="">
              <Link
                type="button"
                className="btn btn-primary float-right"
                to="/management/new-product-type"
              >
                create
              </Link>
            </div>
          </div>
          <div className="card-body">
            {/*begin: Datatable*/}

            <ToolkitProvider
              search={{
                defaultSearch: "search something here",
              }}
              wrapperClasses="table-responsive"
              bordered={false}
              classes="table table-head-custom table-vertical-center mt-5 mb-5"
              id="kt_datatable_2"
              keyField="id"
              bootstrap4
              data={product_types}
              columns={columns}
              pagination={paginationFactory()}
            />

            {/*end: Datatable*/}
          </div>
        </div>
        {/*end::Card*/}
      </div>
    );
  }
}
export default ViewProductType;
