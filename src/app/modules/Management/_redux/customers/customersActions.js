import * as requestFromServer from "./customersCrud";
import { customersSlice, callTypes } from "./customersSlice";
import MockUtils from "../../__mocks__/mock.utils";
import swal from "sweetalert";
const { actions } = customersSlice;

export const fetchCustomers = (queryParams, initial) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));

  console.log(queryParams);
  if (queryParams.filter != "") {
    const mockUtils = new MockUtils();

    if (
      queryParams.filter.lastname == "" &&
      queryParams.filter.is_active == ""
    ) {
      const totalCount = initial.length;
      const entities = initial;

      dispatch(actions.customersFetched({ totalCount, entities }));
    } else {
      const filteredCustomers = mockUtils.baseFilter(initial, queryParams);

      const totalCount = filteredCustomers.totalCount;
      const entities = filteredCustomers.entities;

      dispatch(actions.customersFetched({ totalCount, entities }));
    }
  } else {
    return requestFromServer
      .getAllCustomers()
      .then((response) => {
        const entities = response.data.data;
        console.log(entities);
        const totalCount = entities.length;
        dispatch(actions.fetchCustomers({ totalCount, entities }));
      })
      .catch((error) => {
        error.clientMessage = "Can't find customers";
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });
  }
};

export const fetchCustomer = (id) => (dispatch) => {
  if (!id) {
    return dispatch(actions.customerFetched({ customerForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getCustomerById(id)
    .then((response) => {
      const customer = response.data;
      dispatch(actions.customerFetched({ customerForEdit: customer }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find customer";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteCustomer = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteCustomer(id)
    .then((response) => {
      dispatch(actions.customerDeleted({ id }));
    })
    .catch((error) => {
      error.clientMessage = "Can't delete customer";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createCustomer = (customerForCreation) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createCustomer(customerForCreation)
    .then((response) => {
      const { customer } = response.data;
      dispatch(actions.customerCreated({ customer }));
    })
    .catch((error) => {
      error.clientMessage = "Can't create customer";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateCustomer = (customer) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateCustomer(customer)
    .then(() => {
      dispatch(actions.customerUpdated({ customer }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update customer";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateCustomersStatus = (ids, status) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForCustomers(ids, status)
    .then(() => {
      swal("status changed successfully").then(() => {
        window.location.reload(false);
      });
      // dispatch(actions.customersStatusUpdated({ ids, status }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update customers status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteCustomers = (ids) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteCustomers(ids)
    .then(() => {
      dispatch(actions.customersDeleted({ ids }));
    })
    .catch((error) => {
      error.clientMessage = "Can't delete customers";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
