import { createSlice } from "@reduxjs/toolkit";

const initialAdminsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  initial_entity: null,
  adminForEdit: undefined,
  lastError: null,
};
export const callTypes = {
  list: "list",
  action: "action",
};

export const adminsSlice = createSlice({
  name: "admins",
  initialState: initialAdminsState,
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
    // getAdminById
    adminFetched: (state, action) => {
      state.actionsLoading = false;
      state.adminForEdit = action.payload.adminForEdit;
      state.error = null;
    },

    fetchAdmins: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
      state.initial_entity = entities;
    },

    // findAdmins
    adminsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createAdmin
    adminCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;

      state.entities.push(action.payload.new_Admin);
    },
    // updateAdmin
    adminUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map((entity) => {
        if (entity.id === action.payload.admins.id) {
          return action.payload.admins;
        }
        return entity;
      });
    },
    // deleteAdmin
    adminDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        (el) => el.id !== action.payload.id
      );
    },
    // deleteAdmins
    adminsDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        (el) => !action.payload.ids.includes(el.id)
      );
    },
    // adminsUpdateState
    adminsStatusUpdated: (state, action) => {
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
