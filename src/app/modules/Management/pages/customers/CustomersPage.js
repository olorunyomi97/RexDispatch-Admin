import React from "react";
import { Route } from "react-router-dom";
import { CustomersLoadingDialog } from "./customers-loading-dialog/CustomersLoadingDialog";
import { CustomerEditDialog } from "./customer-edit-dialog/CustomerEditDialog";
// import { CustomerDeleteDialog } from "./customer-delete-dialog/CustomersDeleteDialog";
import { CustomersDeleteDialog } from "./customers-delete-dialog/CustomersDeleteDialog";
import { CustomersFetchDialog } from "./customers-fetch-dialog/CustomersFetchDialog";
import { CustomersUpdateStateDialog } from "./customers-update-status-dialog/CustomersUpdateStateDialog";
import { CustomersUIProvider } from "./CustomersUIContext";
import { CustomersCard } from "./CustomersCard"; 

export function CustomersPage({ history }) {
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/management/customers/new");
    },
    openEditCustomerDialog: (id) => {
      history.push(`/management/customers/${id}/edit`);
    },
    openDeleteCustomerDialog: (id) => {
      history.push(`/management/customers/${id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/management/customers/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/management/customers/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/management/customers/updateStatus");
    },
  };

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/management/customers/new">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push("/management/customers");
            }}
          />
        )}
      </Route>
      <Route path="/management/customers/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/management/customers");
            }}
          />
        )}
      </Route>
   
      {/* <Route path="/management/customers/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/management/customers");
            }}
          />
        )}
      </Route> */}
      {/* <Route path="/management/customers/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/management/customers");
            }}
          />
        )}
      </Route> */}
      <Route path="/management/customers/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/management/customers");
            }}
          />
        )}
      </Route>
      <Route path="/management/customers/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/management/customers");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
