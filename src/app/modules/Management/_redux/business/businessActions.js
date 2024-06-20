import * as requestFromServer from "./businessCrud";
import { businessSlice, callTypes } from "./businessSlice";
import MockUtils from "../../__mocks__/mock.utils";
import swal from "sweetalert";
const { actions } = businessSlice;

export const fetchBusiness = (queryParams, initial) => (dispatch) => {
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

      dispatch(actions.businessFetched({ totalCount, entities }));
    } else {
      const filteredBusiness = mockUtils.baseFilter(initial, queryParams);

      const totalCount = filteredBusiness.totalCount;
      const entities = filteredBusiness.entities;

      dispatch(actions.BusinessFetched({ totalCount, entities }));
    }
  } else {
    return requestFromServer
      .getAllBusiness()
      .then((response) => {
        const entities = response.data.data;
        const totalCount = entities.length;
        dispatch(actions.fetchBusiness({ totalCount, entities }));
      })
      .catch((error) => {
        error.clientMessage = "Can't find Business";
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });
  }
};

export const fetchEachBusiness = (id) => (dispatch) => {
  if (id) {
    return dispatch(actions.businessFetched({ businessForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getBusinessById(id)
    .then((response) => {
      const business = response.data;
      dispatch(actions.businessFetched({ businessForEdit: business }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find business";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteBusiness = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteBusiness(id)
    .then((response) => {
      dispatch(actions.businessDeleted({ id }));
      let error_msg = response.data.message;
      alert(error_msg);
    })
    .catch((error) => {
      error.clientMessage = "Can't delete business";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createBusiness = (businessForCreation) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createBusiness(businessForCreation)
    .then((response) => {
      if (response.data.status === false) {
        let error_msg = response.data.message[0];
        alert(error_msg);
      } else {
        let new_business = response.data.data;
        console.log(new_business);
        dispatch(actions.businessCreated({ new_business }));
      }
    })
    .catch((error) => {
      error.clientMessage = "Can't create business";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateBusiness = (business) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateBusiness(business)
    .then(() => {
      dispatch(actions.businessUpdated({ business }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update business";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateBusinessStatus = (ids) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForBusiness(ids)
    .then((response) => {
      swal(response.data.message).then(() => {
        window.location.reload(false);
        // dispatch(actions.BusinessStatusUpdated({ ids }));
      });
    })

    .catch((error) => {
      error.clientMessage = "Can't update Business status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

// export const deleteBusiness = (ids) => (dispatch) => {
//   dispatch(actions.startCall({ callType: callTypes.action }));
//   return requestFromServer
//     .deleteBusiness(ids)
//     .then(() => {
//       dispatch(actions.BusinessDeleted({ ids }));
//     })
//     .catch((error) => {
//       error.clientMessage = "Can't delete Business";
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//     });
// };
