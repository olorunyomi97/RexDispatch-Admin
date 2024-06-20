// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/business/businessActions";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
  headerSortingClasses,
} from "../../../../../../_metronic/_helpers";
import * as uiHelpers from "../BusinessUIHelpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useBusinessUIContext } from "../BusinessUIContext";

import Action from "../../../../../helpers/View";
import DateFormatter from "../../../../../helpers/DateFormatter";

export function BusinessTable() {
  // Business UI Context
  const businessUIContext = useBusinessUIContext();
  const businessUIProps = useMemo(() => {
    return {
      ids: businessUIContext.ids,
      setIds: businessUIContext.setIds,
      queryParams: businessUIContext.queryParams,
      setQueryParams: businessUIContext.setQueryParams,
      openEditBusinessDialog: businessUIContext.openEditBusinessDialog,
      openDeleteBusinessDialog: businessUIContext.openDeleteBusinessDialog,
    };
  }, [businessUIContext]);

  // Getting current state of business list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.business }),
    shallowEqual
  );
  const { totalCount, entities, listLoading, initial_entity } = currentState;

  //nullchecker for company name
  const nullChecker = (cell) => (!cell ? "N/A" : cell);

  // Business Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    businessUIProps.setIds([]);
    // server call by queryParams
    dispatch(
      actions.fetchBusiness(businessUIProps.queryParams, initial_entity)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    // {
    //   dataField: "id",
    //   text: "ID",
    //   sort: true,
    //   sortCaret: sortCaret,
    //   headerSortingClasses,
    // },
    {
      dataField: "business_name",
      text: "Business Name",
      sort: true,
      sortCaret: sortCaret,
      formatter: nullChecker,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "phone",
      text: "Phone",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "location",
      text: "Location",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "is_active",
      text: "Status",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.StatusColumnFormatter,
      headerSortingClasses,
    },
    {
      dataField: "createdAt",
      text: "Date Joined",
      formatter: DateFormatter,
    },
    { dataField: "_id", text: "", formatter: Action },

    // create an action for toggle business status

    //   {
    //     dataField: "action",
    //     text: "Actions",
    //     formatter: columnFormatters.ActionsColumnFormatter,
    //     formatExtraData: {
    //       openEditBusinessDialog: businessUIProps.openEditBusinessDialog,
    //       openDeleteBusinessDialog: businessUIProps.openDeleteBusinessDialog,
    //     },
    //     classes: "text-center pr-0",
    //     headerClasses: "text-right pr-3",
    //     style: {
    //       minWidth: "100px",
    //     },
    //   },
  ];
  // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: businessUIProps.queryParams.pageSize,
    page: businessUIProps.queryParams.pageNumber,
  };

  return (
    <>
      <PaginationProvider pagination={paginationFactory(paginationOptions)}>
        {({ paginationProps, paginationTableProps }) => {
          return (
            <Pagination
              isLoading={listLoading}
              paginationProps={paginationProps}
            >
              <BootstrapTable
                wrapperClasses="table-responsive"
                bordered={false}
                classes="table table-head-custom table-vertical-center"
                bootstrap4
                keyField="_id"
                data={entities === null ? [] : entities}
                columns={columns}
                // defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  businessUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: businessUIProps.ids,
                  setIds: businessUIProps.setIds,
                })}
                {...paginationTableProps}
              >
                <PleaseWaitMessage entities={entities} />
                <NoRecordsFoundMessage entities={entities} />
              </BootstrapTable>
            </Pagination>
          );
        }}
      </PaginationProvider>
    </>
  );
}
