import React from "react";
import { Route } from "react-router-dom";
import { DiscountsLoadingDialog } from "./discounts-loading-dialog/DiscountsLoadingDialog";
import { DiscountEditDialog } from "./discount-edit-dialog/DiscountEditDialog";
import { DiscountDeleteDialog } from "./discount-delete-dialog/DiscountDeleteDialog";
// import { DiscountsDeleteDialog } from "./discounts-delete-dialog/DiscountsDeleteDialog";
import { DiscountsFetchDialog } from "./discounts-fetch-dialog/DiscountsFetchDialog";
import { DiscountsUpdateStateDialog } from "./discounts-update-status-dialog/DiscountsUpdateStateDialog";
import { DiscountsUIProvider } from "./DiscountsUIContext";
import { DiscountsCard } from "./DiscountsCard";

export function DiscountsPage({ history }) {
  const discountsUIEvents = {
    newDiscountButtonClick: () => {
      history.push("/promotions/discounts/new");
    },
    // openEditDiscountDialog: (id) => {
    //   history.push(`/promotions/discounts/${id}/edit`);
    // },
    // openDeleteDiscountDialog: (id) => {
    //   history.push(`/promotions/discounts/${id}/delete`);
    // },
    openDeleteDiscountsDialog: () => {
      history.push(`/promotions/discounts/deleteDiscounts`);
    },
    openFetchDiscountsDialog: () => {
      history.push(`/promotions/discounts/fetch`);
    },
    openUpdateDiscountsStatusDialog: () => {
      history.push("/promotions/discounts/updateStatus");
    },
  };

  return (
    <DiscountsUIProvider discountsUIEvents={discountsUIEvents}>
      <DiscountsLoadingDialog />
      <Route path="/promotions/discounts/new">
        {({ history, match }) => (
          <DiscountEditDialog
            show={match != null}
            onHide={() => {
              history.push("/promotions/discounts");
            }}
          />
        )}
      </Route>
      {/* <Route path="/promotions/discounts/:id/edit">
        {({ history, match }) => (
          <DiscountEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/promotions/discounts");
            }}
          />
        )}
      </Route> */}
      {/* <Route path="/promotions/discounts/deleteDiscounts">
        {({ history, match }) => (
          <DiscountsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/promotions/discounts");
            }}
          />
        )}
      </Route> */}
      <Route path="/promotions/discounts/:id/delete">
        {({ history, match }) => (
          <DiscountDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/promotions/discounts");
            }}
          />
        )}
      </Route>
      <Route path="/promotions/discounts/fetch">
        {({ history, match }) => (
          <DiscountsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/promotions/discounts");
            }}
          />
        )}
      </Route>
      <Route path="/promotions/discounts/updateStatus">
        {({ history, match }) => (
          <DiscountsUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/promotions/discounts");
            }}
          />
        )}
      </Route>
      <DiscountsCard />
    </DiscountsUIProvider>
  );
}
