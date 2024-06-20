import React, { Suspense } from "react";
import { LayoutSplashScreen, ContentRoute } from "../../../_metronic/layout";
import { Redirect, Switch, Route } from "react-router-dom";
import { PromotionsPage } from "./Pages/Promotions/PromotionsPage";
import { PromotionEdit } from "./Pages/Promotions/promotion-edit/PromotionEdit";
import { DiscountsPage } from "./Pages/Disounts/DiscountsPage";

export default function Promotions() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from promotions root URL to /discounts */
          <Redirect
            exact={true}
            from="/promotions"
            to="/promotions/promotions"
          />
        }
        <Route exact path="/promotions/promotions" component={PromotionsPage} />
        {/* <Route exact path="/promotions/discounts" component={DiscountsPage} /> */}
        <ContentRoute
          path="/promotions/promotions/new"
          component={PromotionEdit}
        />
      </Switch>
    </Suspense>
  );
}
