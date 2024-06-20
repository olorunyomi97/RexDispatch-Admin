import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./PromotionsUIHelpers";

const PromotionsUIContext = createContext();

export function usePromotionsUIContext() {
  return useContext(PromotionsUIContext);
}

export const PromotionsUIConsumer = PromotionsUIContext.Consumer;

export function PromotionsUIProvider({ promotionsUIEvents, children }) {
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

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    newPromotionButtonClick: promotionsUIEvents.newPromotionButtonClick,
    openDeletePromotionDialog: promotionsUIEvents.openDeletePromotionDialog,
    openFetchPromotionsDialog: promotionsUIEvents.openFetchPromotionsDialog,
  };

  return (
    <PromotionsUIContext.Provider value={value}>
      {children}
    </PromotionsUIContext.Provider>
  );
}
