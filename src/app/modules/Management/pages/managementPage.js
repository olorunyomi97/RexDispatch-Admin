import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CustomersPage } from "./customers/CustomersPage";
import { BusinessPage } from "./business/BusinessPage";
import { AdminPage } from "./Admin/AdminPage";
import { ProductsPage } from "./products/ProductsPage";
import { ProductEdit } from "./products/product-edit/ProductEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import EachCustomer from "./customers/EachCustomer";
import ProductType from "./view-productType/productType";
import ViewProductType from "./view-productType/view-productType";
import EachBusiness from "./business/EachBusiness";

export default function ManagementPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from="/management"
            to="/management/customers"
          />
        }
        <ContentRoute path="/management/customers" component={CustomersPage} />
        <ContentRoute path="/management/business" component={BusinessPage} />
        <ContentRoute
          path="/management/customers-view/:id"
          component={EachCustomer}
        />
        <ContentRoute
          path="/management/business-view/:id"
          component={EachBusiness}
        />
        <ContentRoute path="/management/admins" component={AdminPage} />
        <ContentRoute path="/management/products/new" component={ProductEdit} />
        <ContentRoute
          path="/management/products/:id/edit"
          component={ProductEdit}
        />
        <ContentRoute
          path="/management/new-product-type"
          component={ProductType}
        />
        <ContentRoute
          path="/management/product-type"
          component={ViewProductType}
        />

        <ContentRoute path="/management/products" component={ProductsPage} />
      </Switch>
    </Suspense>
  );
}
