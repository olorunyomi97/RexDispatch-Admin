import React from "react";
import { Route } from "react-router-dom";
import { PromotionsLoadingDialog } from "./promotions-loading-dialog/PromotionsLoadingDialog";
import { PromotionDeleteDialog } from "./promotion-delete-dialog/PromotionDeleteDialog";
import { PromotionsFetchDialog } from "./promotions-fetch-dialog/PromotionsFetchDialog";
import { PromotionsCard } from "./PromotionsCard";
import { PromotionsUIProvider } from "./PromotionsUIContext";

export function PromotionsPage({ history }) {
  const promotionsUIEvents = {
    newPromotionButtonClick: () => {
      history.push("/promotions/promotions/new");
    },

    openDeletePromotionDialog: (id) => {
      history.push(`/promotions/promotions/${id}/delete`);
    },

    openFetchPromotionsDialog: () => {
      history.push(`/promotions/promotions/fetch`);
    },
  };

  return (
    <PromotionsUIProvider promotionsUIEvents={promotionsUIEvents}>
      <PromotionsLoadingDialog />

      <Route path="/promotions/promotions/:id/delete">
        {({ history, match }) => (
          <PromotionDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/promotions/promotions");
            }}
          />
        )}
      </Route>
      <Route path="/promotions/promotions/fetch">
        {({ history, match }) => (
          <PromotionsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/promotions/promotions");
            }}
          />
        )}
      </Route>

      <PromotionsCard />
    </PromotionsUIProvider>
  );
}
