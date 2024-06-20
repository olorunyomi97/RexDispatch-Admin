import * as requestFromServer from "./promotionsCrud.js";
import { promotionsSlice, callTypes } from "./promotionsSlice";
import MockUtils from "../../../Management/__mocks__/mock.utils";

const { actions } = promotionsSlice;

export const fetchPromotions = (queryParams, initial) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));

  if (queryParams.filter != "") {
    const mockUtils = new MockUtils();

    if (
      queryParams.filter.promo_name == "" &&
      queryParams.filter.promo_status == ""
    ) {
      const totalCount = initial.length;
      const entities = initial;

      dispatch(actions.promotionsFetched({ totalCount, entities }));
    } else {
      const filteredPromos = mockUtils.baseFilter(initial, queryParams);

      const totalCount = filteredPromos.totalCount;
      const entities = filteredPromos.entities;

      dispatch(actions.promotionsFetched({ totalCount, entities }));
    }
  } else {
    return requestFromServer
      .getAllPromotions(queryParams)
      .then((response) => {
        const entities = response.data.data;
        const totalCount = entities.length;
        console.log(entities);
        dispatch(actions.fetchPromos({ totalCount, entities }));
      })
      .catch((error) => {
        error.clientMessage = "Can't find promotions";
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });
  }
};

export const fetchPromotion = (id) => (dispatch) => {
  if (!id) {
    return dispatch(actions.promotionFetched({ promotionForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getPromotionById(id)
    .then((response) => {
      const promotion = response.data;
      dispatch(actions.promotionFetched({ promotionForEdit: promotion }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find promotion";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deletePromotion = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deletePromotion(id)
    .then((response) => {
      dispatch(actions.promotionDeleted({ id }));
    })
    .catch((error) => {
      error.clientMessage = "Can't delete promotion";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createPromotion = (promotionForCreation) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createPromotion(promotionForCreation)
    .then((response) => {
      const { promotion } = response.data;
      alert(response.data.message);
      // dispatch(actions.promotionCreated({ promotion }));
      // console.log(response.data.message);
    })
    .then(() => {
      window.location.reload(false);
    })

    .catch((error) => {
      error.clientMessage = "Can't create promotion";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updatePromotion = (promotion) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updatePromotion(promotion)
    .then(() => {
      dispatch(actions.promotionUpdated({ promotion }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update promotion";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updatePromotionsStatus = (ids, status) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForPromotions(ids, status)
    .then(() => {
      dispatch(actions.promotionsStatusUpdated({ ids, status }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update promotions status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deletePromotions = (ids) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deletePromotions(ids)
    .then(() => {
      dispatch(actions.promotionsDeleted({ ids }));
    })
    .catch((error) => {
      error.clientMessage = "Can't delete promotions";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
