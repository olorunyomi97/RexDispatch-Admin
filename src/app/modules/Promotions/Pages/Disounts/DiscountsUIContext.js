import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./DiscountsUIHelpers";

const DiscountsUIContext = createContext();

export function useDiscountsUIContext() {
  return useContext(DiscountsUIContext);
}

export const DiscountsUIConsumer = DiscountsUIContext.Consumer;

export function DiscountsUIProvider({ discountsUIEvents, children }) {
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

  const initDiscount = {
    discount_code: "",
    amount: "",
    start_date: "",
    end_date: "",
  };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initDiscount,
    newDiscountButtonClick: discountsUIEvents.newDiscountButtonClick,
    // openEditDiscountDialog: discountsUIEvents.openEditDiscountDialog,
    openDeleteDiscountDialog: discountsUIEvents.openDeleteDiscountDialog,
    openFetchDiscountsDialog: discountsUIEvents.openFetchDiscountsDialog,
    openUpdateDiscountsStatusDialog:
      discountsUIEvents.openUpdateDiscountsStatusDialog,
  };

  return (
    <DiscountsUIContext.Provider value={value}>
      {children}
    </DiscountsUIContext.Provider>
  );
}
