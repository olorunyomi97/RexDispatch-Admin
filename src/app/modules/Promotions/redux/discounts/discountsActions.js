import * as requestFromServer from "./discountsCrud";
import { discountsSlice, callTypes } from "./discountsSlice";

const { actions } = discountsSlice;

export const fetchDiscounts = (queryParams) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getAllDiscounts(queryParams)
    .then((response) => {
      const entities = response.data.data;
      const totalCount = entities.length;
      dispatch(actions.discountsFetched({ totalCount, entities }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find discounts";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchDiscount = (id) => (dispatch) => {
  if (!id) {
    return dispatch(actions.discountFetched({ discountForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getDiscountById(id)
    .then((response) => {
      const discount = response.data;
      dispatch(actions.discountFetched({ discountForEdit: discount }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find discount";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDiscount = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDiscount(id)
    .then((response) => {
      dispatch(actions.discountDeleted({ id }));
    })
    .catch((error) => {
      error.clientMessage = "Can't delete discount";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createDiscount = (discountForCreation) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createDiscount(discountForCreation)
    .then((response) => {
      const { discount } = response.data;
      // dispatch(actions.discountCreated({ discount }));
      alert(response.data.message);
      window.location.reload(false);
    })
    .catch((error) => {
      error.clientMessage = "Can't create discount";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDiscount = (discount) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateDiscount(discount)
    .then(() => {
      dispatch(actions.discountUpdated({ discount }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update discount";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDiscountsStatus = (ids, status) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForDiscounts(ids, status)
    .then(() => {
      dispatch(actions.discountsStatusUpdated({ ids, status }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update discounts status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

// export const deleteDiscounts = (ids) => (dispatch) => {
//   dispatch(actions.startCall({ callType: callTypes.action }));
//   return requestFromServer
//     .deleteDiscounts(ids)
//     .then(() => {
//       dispatch(actions.discountsDeleted({ ids }));
//     })
//     .catch((error) => {
//       error.clientMessage = "Can't delete discount";
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//     });
// };
