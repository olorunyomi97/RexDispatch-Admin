import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./AdminUIHelpers";

const AdminsUIContext = createContext();

export function useAdminsUIContext() {
  return useContext(AdminsUIContext);
}

export const AdminsUIConsumer = AdminsUIContext.Consumer;

export function AdminsUIProvider({ adminsUIEvents, children }) {
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const initAdmin = {
    id: undefined,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    role: 1,
  };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initAdmin,
    newAdminButtonClick: adminsUIEvents.newAdminButtonClick,
    openEditAdminDialog: adminsUIEvents.openEditAdminDialog,
    openDeleteAdminDialog: adminsUIEvents.openDeleteAdminDialog,
    openDeleteAdminsDialog: adminsUIEvents.openDeleteAdminsDialog,
    openFetchAdminsDialog: adminsUIEvents.openFetchAdminsDialog,
    openUpdateAdminsStatusDialog: adminsUIEvents.openUpdateAdminsStatusDialog,
  };

  return (
    <AdminsUIContext.Provider value={value}>
      {children}
    </AdminsUIContext.Provider>
  );
}
