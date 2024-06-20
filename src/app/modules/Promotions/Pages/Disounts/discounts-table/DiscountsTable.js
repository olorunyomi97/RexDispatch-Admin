// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/discounts/discountsActions";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
  headerSortingClasses,
} from "../../../../../../_metronic/_helpers";
import * as uiHelpers from "../DiscountsUIHelpers";
import * as columnFormatters from "./column-formatters";
import { ActionsColumnFormatter } from "./column-formatters/ActionsColumnFormatter";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useDiscountsUIContext } from "../DiscountsUIContext";

export function DiscountsTable() {
  // Discounts UI Context
  const discountsUIContext = useDiscountsUIContext();
  const discountsUIProps = useMemo(() => {
    return {
      ids: discountsUIContext.ids,
      setIds: discountsUIContext.setIds,
      queryParams: discountsUIContext.queryParams,
      setQueryParams: discountsUIContext.setQueryParams,
      // openEditDiscountDialog: discountsUIContext.openEditDiscountDialog,
      openDeleteDiscountDialog: discountsUIContext.openDeleteDiscountDialog,
    };
  }, [discountsUIContext]);

  // Getting curret state of discounts list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.discounts }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;

  // discounts Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    discountsUIProps.setIds([]);
    // server call by queryParams
    dispatch(actions.fetchDiscounts(discountsUIProps.queryParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discountsUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "discount_code",
      text: "Discount Code",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "currency",
      text: "Currency",
      sort: false,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "amount",
      text: "Amount",
      sort: false,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "start_date",
      text: "Start Date",
      sort: false,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "end_date",
      text: "End Date",
      sort: false,
      sortCaret: sortCaret,
    },
    {
      dataField: "discount_status",
      text: "Status",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.StatusColumnFormatter,
      headerSortingClasses,
    },

    // {
    //   dataField: "type",
    //   text: "Type",
    //   sort: true,
    //   sortCaret: sortCaret,
    //   formatter: columnFormatters.TypeColumnFormatter,
    // },
    {
      dataField: "id",
      text: "Actions",
      formatter: ActionsColumnFormatter,
      // formatExtraData: {
      //   // openEditDiscountDialog: DiscountsUIProps.openEditDiscountDialog,
      //   openDeleteDiscountDialog: discountsUIProps.openDeleteDiscountDialog,
      // },
      classes: "text-center pr-0",
      headerClasses: "text-center pr-3",
      style: {
        minWidth: "100px",
      },
    },
  ];
  // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: discountsUIProps.queryParams.pageSize,
    page: discountsUIProps.queryParams.pageNumber,
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
                remote
                keyField="id"
                data={entities === null ? [] : entities}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  discountsUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: discountsUIProps.ids,
                  setIds: discountsUIProps.setIds,
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
