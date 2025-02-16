import { createSlice } from "@reduxjs/toolkit";

const initialDiscountsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  discountForEdit: undefined,
  lastError: null,
};
export const callTypes = {
  list: "list",
  action: "action",
};

export const discountsSlice = createSlice({
  name: "discounts",
  initialState: initialDiscountsState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    // getDiscountById
    discountFetched: (state, action) => {
      state.actionsLoading = false;
      state.discountForEdit = action.payload.discountForEdit;
      state.error = null;
    },
    // finddiscounts
    discountsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createDiscount
    discountCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.discount);
    },
    // updateDiscount
    discountUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map((entity) => {
        if (entity.id === action.payload.discount.id) {
          return action.payload.discount;
        }
        return entity;
      });
    },
    // deletediscount
    discountDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        (el) => el.id !== action.payload.id
      );
    },
    // deletediscounts
    // discountsDeleted: (state, action) => {
    //   state.error = null;
    //   state.actionsLoading = false;
    //   state.entities = state.entities.filter(
    //     el => !action.payload.ids.includes(el.id)
    //   );
    // },
    // discountsUpdateState
    discountsStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      const { ids, status } = action.payload;
      state.entities = state.entities.map((entity) => {
        if (ids.findIndex((id) => id === entity.id) > -1) {
          entity.status = status;
        }
        return entity;
      });
    },
  },
});
