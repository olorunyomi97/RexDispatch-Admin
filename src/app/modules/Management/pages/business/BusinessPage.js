import React from "react";
import { Route } from "react-router-dom";
import { BusinessLoadingDialog } from "./business-loading-dialog/BusinessLoadingDialog";
import { BusinessEditDialog } from "./business-edit-dialog/BusinessEditDialog";
import { BusinessDeleteDialog } from "./business-delete-dialog/BusinessDeleteDialog";
// import { BusinessDeleteDialog } from "./business-delete-dialog/BusinessDeleteDialog";
import { BusinessFetchDialog } from "./business-fetch-dialog/BusinessFetchDialog";
import { BusinessUpdateStateDialog } from "./business-update-status-dialog/BusinessUpdateStatusDialog";
import { BusinessUIProvider } from "./BusinessUIContext";
import { BusinessCard } from "./BusinessCard";

export function BusinessPage({ history }) {
  const businessUIEvents = {
    newBusinessButtonClick: () => {
      history.push("/management/business/new");
    },
    openEditBusinessDialog: (id) => {
      history.push(`/management/business/${id}/edit`);
    },
    openDeleteBusinessDialog: (id) => {
      history.push(`/management/business/${id}/delete`);
    },
    openDeleteBusinessDialog: () => {
      history.push(`/management/business/deleteBusiness`);
    },
    openFetchBusinessDialog: () => {
      history.push(`/management/business/fetch`);
    },
    openUpdateBusinessStatusDialog: () => {
      history.push("/management/business/updateStatus");
    },
  };

  return (
    <BusinessUIProvider businessUIEvents={businessUIEvents}>
      <BusinessLoadingDialog />
      <Route path="/management/business/new">
        {({ history, match }) => (
          <BusinessEditDialog
            show={match != null}
            onHide={() => {
              history.push("/management/business");
            }}
          />
        )}
      </Route>
      <Route path="/management/business/:id/edit">
        {({ history, match }) => (
          <BusinessEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/management/business");
            }}
          />
        )}
      </Route>
      <Route path="/management/business/deleteBusiness">
        {({ history, match }) => (
          <BusinessDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/management/business");
            }}
          />
        )}
      </Route>
      <Route path="/management/business/:id/delete">
        {({ history, match }) => (
          <BusinessDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/management/business");
            }}
          />
        )}
      </Route>
      <Route path="/management/business/fetch">
        {({ history, match }) => (
          <BusinessFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/management/business");
            }}
          />
        )}
      </Route>
      <Route path="/management/business/updateStatus">
        {({ history, match }) => (
          <BusinessUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/management/business");
            }}
          />
        )}
      </Route>
      <BusinessCard />
    </BusinessUIProvider>
  );
}
