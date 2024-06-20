// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/promotions/promotionsActions";
import * as uiHelpers from "../PromotionsUIHelpers";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
} from "../../../../../../_metronic/_helpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { usePromotionsUIContext } from "../PromotionsUIContext";
import { ActionsColumnFormatter } from "./column-formatters/ActionsColumnFormatter";
export function PromotionsTable() {
  // Promotions UI Context
  const promotionsUIContext = usePromotionsUIContext();
  const promotionsUIProps = useMemo(() => {
    return {
      ids: promotionsUIContext.ids,
      setIds: promotionsUIContext.setIds,
      queryParams: promotionsUIContext.queryParams,
      setQueryParams: promotionsUIContext.setQueryParams,
      openViewPromotionPage: promotionsUIContext.openViewPromotionPage,
      openDeletePromotionDialog: promotionsUIContext.openDeletePromotionDialog,
    };
  }, [promotionsUIContext]);

  // Getting curret state of promotions list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.promotions }),
    shallowEqual
  );
  const { totalCount, entities, listLoading, initial_entity } = currentState;
  // Promotions Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    promotionsUIProps.setIds([]);
    // server call by queryParams
    dispatch(
      actions.fetchPromotions(promotionsUIProps.queryParams, initial_entity)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promotionsUIProps.queryParams, dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "id",
      text: "(ID)",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "promo_name",
      text: "Name",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "promo_percent",
      text: "Percentage(%)",
      sort: true,
      sortCaret: sortCaret,
      // formatter: columnFormatters.PriceColumnFormatter,
    },
    {
      dataField: "start_date",
      text: "Start Date",
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "end_date",
      text: "End Date",
      sort: true,
      sortCaret: sortCaret,
    },
    // {
    //   dataField: "products",
    //   text: "Products",
    //   sort: true,
    //   sortCaret: sortCaret,
    // },
    {
      dataField: "promo_status",
      text: "Status",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.StatusColumnFormatter,
    },
    // {
    //   dataField: "condition",
    //   text: "Condition",
    //   sort: true,
    //   sortCaret: sortCaret,
    //   formatter: columnFormatters.ConditionColumnFormatter,
    // },
    {
      dataField: "id",
      text: "Actions",
      formatter: ActionsColumnFormatter,

      classes: "text-center pr-0",
      // headerClasses: "text-right pr-3",
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
    sizePerPage: promotionsUIProps.queryParams.pageSize,
    page: promotionsUIProps.queryParams.pageNumber,
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
                classes="table table-head-custom table-vertical-center"
                bootstrap4
                bordered={false}
                keyField="id"
                data={entities === null ? [] : entities}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  promotionsUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: promotionsUIProps.ids,
                  setIds: promotionsUIProps.setIds,
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
