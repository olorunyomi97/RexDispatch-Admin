import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import { adminsSlice } from "../app/modules/Management/_redux/admins/adminsSlice";
import { customersSlice } from "../app/modules/Management/_redux/customers/customersSlice";
import { businessSlice } from "../app/modules/Management/_redux/business/businessSlice";
import { productsSlice } from "../app/modules/Management/_redux/products/productsSlice";
import { remarksSlice } from "../app/modules/Management/_redux/remarks/remarksSlice";
import { specificationsSlice } from "../app/modules/Management/_redux/specifications/specificationsSlice";
import { promotionsSlice } from "../app/modules/Promotions/redux/promotions/promotionsSlice";
import { discountsSlice } from "../app/modules/Promotions/redux/discounts/discountsSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  admins: adminsSlice.reducer,
  customers: customersSlice.reducer,
  business: businessSlice.reducer,
  products: productsSlice.reducer,
  remarks: remarksSlice.reducer,
  specifications: specificationsSlice.reducer,
  promotions: promotionsSlice.reducer,
  discounts: discountsSlice.reducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
