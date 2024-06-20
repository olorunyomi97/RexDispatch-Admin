import * as requestFromServer from "./adminsCrud";
import { adminsSlice, callTypes } from "./adminsSlice";
import MockUtils from "../../__mocks__/mock.utils";
import swal from "sweetalert";
const { actions } = adminsSlice;

export const fetchAdmins = (queryParams, initial) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));

  console.log(initial);
  if (queryParams.filter != "") {
    const mockUtils = new MockUtils();

    if (
      queryParams.filter.lastname == "" &&
      queryParams.filter.is_active == ""
    ) {
      const totalCount = initial.length;
      const entities = initial;

      dispatch(actions.adminsFetched({ totalCount, entities }));
    } else {
      const filteredAdmins = mockUtils.baseFilter(initial, queryParams);

      const totalCount = filteredAdmins.totalCount;
      const entities = filteredAdmins.entities;

      dispatch(actions.adminsFetched({ totalCount, entities }));
    }
  } else {
    return requestFromServer
      .getAllAdmins()
      .then((response) => {
        console.log(response.data.data);
        const entities = response.data.data;
        const totalCount = entities.length;
        dispatch(actions.fetchAdmins({ totalCount, entities }));
      })
      .catch((error) => {
        error.clientMessage = "Can't find admins";
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });
  }
};

export const fetchAdmin = (id) => (dispatch) => {
  if (id) {
    return dispatch(actions.adminFetched({ adminForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAdminById(id)
    .then((response) => {
      const admin = response.data;
      dispatch(actions.adminFetched({ adminForEdit: admin }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find admin";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteAdmin = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteAdmin(id)
    .then((response) => {
      dispatch(actions.adminDeleted({ id }));
      // let error_msg = response.data.message;
      // alert(error_msg);
    })
    .catch((error) => {
      error.clientMessage = "Can't delete admin";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createAdmin = (adminForCreation) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createAdmin(adminForCreation)
    .then((response) => {
      console.log(response);
      if (response.data.error == true) {
        let error_msg = response.data.message;
        alert(error_msg);
      } else {
        let new_Admin = response.data.data;

        dispatch(actions.adminCreated({ new_Admin }));
      }
    })
    .catch((error) => {
      error.clientMessage = "Can't create admin";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateAdmin = (admin) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateAdmin(admin)
    .then(() => {
      dispatch(actions.adminUpdated({ admin }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update admin";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateAdminsStatus = (ids) => (dispatch) => {
  console.log(ids);
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForAdmins(ids)
    .then(() => {
      swal("status changed successfully").then(() => {
        window.location.reload(false);
      });
      // dispatch(actions.adminsStatusUpdated({ ids }));
    })

    .catch((error) => {
      error.clientMessage = "Can't update admins status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteAdmins = (ids) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteAdmins(ids)
    .then(() => {
      dispatch(actions.adminsDeleted({ ids }));
    })
    .catch((error) => {
      error.clientMessage = "Can't delete admins";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
