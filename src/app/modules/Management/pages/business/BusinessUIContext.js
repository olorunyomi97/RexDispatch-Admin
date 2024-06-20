import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./BusinessUIHelpers";

const BusinessUIContext = createContext();

export function useBusinessUIContext() {
  return useContext(BusinessUIContext);
}

export const BusinessUIConsumer = BusinessUIContext.Consumer;

export function BusinessUIProvider({ businessUIEvents, children }) {
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

  const initBusiness = {
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
    initBusiness,
    newBusinessButtonClick: businessUIEvents.newBusinessButtonClick,
    openEditBusinessDialog: businessUIEvents.openEditBusinessDialog,
    openDeleteBusinessDialog: businessUIEvents.openDeleteBusinessDialog,
    openDeleteBusinessDialog: businessUIEvents.openDeleteBusinessDialog,
    openFetchBusinessDialog: businessUIEvents.openFetchBusinessDialog,
    openUpdateBusinessStatusDialog:
      businessUIEvents.openUpdateBusinessStatusDialog,
  };

  return (
    <BusinessUIContext.Provider value={value}>
      {children}
    </BusinessUIContext.Provider>
  );
}
