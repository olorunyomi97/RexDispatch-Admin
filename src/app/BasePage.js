import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import { PaymentPage } from "./pages/PaymentPage";

import { SubscriptionPage } from "./pages/SubscriptionPage";
import ManagementPage from "./modules/Management/pages/managementPage";
import Promotions from "./modules/Promotions/Index";
import Profile from "./modules/Profile";

//dispatch
import Dispatch from "./modules/Dispatch";
import EachDispatch from "./modules/Dispatch/eachDispatch";

import { useSelector } from "react-redux";

export default function BasePage() {
  const { user } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  //shwo

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/dispatch" component={Dispatch} />
        <ContentRoute path="/dispatch-view/:id" component={EachDispatch} />
        <ContentRoute path="/payments" component={PaymentPage} />

        <ContentRoute path="/subscription" component={SubscriptionPage} />
        <ContentRoute path="/profile" component={Profile} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        {/* <Route path="/google-material" component={GoogleMaterialPage}/>
            <Route path="/react-bootstrap" component={ReactBootstrapPage}/> */}
        <Route path="/management" component={ManagementPage} />
        <Route path="/promotions" component={Promotions} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
