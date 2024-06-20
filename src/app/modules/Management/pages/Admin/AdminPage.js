import React from "react";
import { Route } from "react-router-dom";
import { AdminsLoadingDialog } from "./admin-loading-dialog/AdminLoadingDialog";
import { AdminEditDialog } from "./admin-edit-dialog/AdminEditDialog";
import { AdminDeleteDialog } from "./admin-delete-dialog/AdminDeleteDialog";
import { AdminsDeleteDialog } from "./admins-delete-dialog/AdminsDeleteDialog";
import { AdminsFetchDialog } from "./admin-fetch-dialog/AdminFetchDialog";
import { AdminsUpdateStateDialog } from "./admin-update-status-dialog/AdminUpdateStatusDialog";
import { AdminsUIProvider } from "./AdminUIContext";
import { AdminsCard } from "./AdminCard";

export function AdminPage({ history }) {
  const adminsUIEvents = {
    newAdminButtonClick: () => {
      history.push("/management/admins/new");
    },
    openEditAdminDialog: (id) => {
      history.push(`/management/admins/${id}/edit`);
    },
    openDeleteAdminDialog: (id) => {
      history.push(`/management/admins/${id}/delete`);
    },
    openDeleteAdminsDialog: () => {
      history.push(`/management/admins/deleteAdmins`);
    },
    openFetchAdminsDialog: () => {
      history.push(`/management/admins/fetch`);
    },
    openUpdateAdminsStatusDialog: () => {
      history.push("/management/admins/updateStatus");
    },
  };

  return (
    <AdminsUIProvider adminsUIEvents={adminsUIEvents}>
      <AdminsLoadingDialog />
      <Route path="/management/admins/new">
        {({ history, match }) => (
          <AdminEditDialog
            show={match != null}
            onHide={() => {
              history.push("/management/admins");
            }}
          />
        )}
      </Route>
      <Route path="/management/admins/:id/edit">
        {({ history, match }) => (
          <AdminEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/management/admins");
            }}
          />
        )}
      </Route>
      <Route path="/management/admins/deleteAdmins">
        {({ history, match }) => (
          <AdminsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/management/admins");
            }}
          />
        )}
      </Route>
      <Route path="/management/admins/:id/delete">
        {({ history, match }) => (
          <AdminDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/management/admins");
            }}
          />
        )}
      </Route>
      <Route path="/management/admins/fetch">
        {({ history, match }) => (
          <AdminsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/management/admins");
            }}
          />
        )}
      </Route>
      <Route path="/management/admins/updateStatus">
        {({ history, match }) => (
          <AdminsUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/management/admins");
            }}
          />
        )}
      </Route>
      <AdminsCard />
    </AdminsUIProvider>
  );
}
