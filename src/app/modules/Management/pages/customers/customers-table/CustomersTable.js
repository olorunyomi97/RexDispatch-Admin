// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/customers/customersActions";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
  headerSortingClasses,
} from "../../../../../../_metronic/_helpers";
import * as uiHelpers from "../CustomersUIHelpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useCustomersUIContext } from "../CustomersUIContext";
import Action from "../../../../../helpers/View";
import DateFormatter from "../../../../../helpers/DateFormatter";

export function CustomersTable() {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      setIds: customersUIContext.setIds,
      queryParams: customersUIContext.queryParams,
      setQueryParams: customersUIContext.setQueryParams,
      openEditCustomerDialog: customersUIContext.openEditCustomerDialog,
      openDeleteCustomerDialog: customersUIContext.openDeleteCustomerDialog,
    };
  }, [customersUIContext]);

  // Getting curret state of customers list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.customers }),
    shallowEqual
  );
  const { totalCount, entities, listLoading, initial_entity } = currentState;

  // Customers Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    customersUIProps.setIds([]);
    // server call by queryParams
    // console.log(actions.fetchCustomer(customersUIProps.queryParams));
    dispatch(
      actions.fetchCustomers(customersUIProps.queryParams, initial_entity)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersUIProps.queryParams, dispatch]);
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
      dataField: "firstname",
      text: "First name",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "lastname",
      text: "Last name",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
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
    // {
    //   dataField: "gender",
    //   text: "Gender",
    //   sort: false,
    //   sortCaret: sortCaret,
    // },
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
    // {
    //   dataField: "type",
    //   text: "Type",
    //   sort: true,
    //   sortCaret: sortCaret,
    //   formatter: columnFormatters.TypeColumnFormatter,
    // },
    // {
    //   dataField: "action",
    //   text: "Actions",
    //   formatter: columnFormatters.ActionsColumnFormatter,
    //   formatExtraData: {
    //     openEditCustomerDialog: customersUIProps.openEditCustomerDialog,
    //     openDeleteCustomerDialog: customersUIProps.openDeleteCustomerDialog,
    //   },
    //   classes: "text-right pr-0",
    //   headerClasses: "text-right pr-3",
    //   style: {
    //     minWidth: "100px",
    //   },
    // },
  ];
  // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize: totalCount,
    sizePerPageList: uiHelpers.sizePerPageList,
    sizePerPage: customersUIProps.queryParams.pageSize,
    page: customersUIProps.queryParams.pageNumber,
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
                classes="table table-striped table-vertical-center"
                bootstrap4
                remote
                keyField="_id"
                data={entities === null ? [] : entities}
                columns={columns}
                defaultSorted={uiHelpers.defaultSorted}
                onTableChange={getHandlerTableChange(
                  customersUIProps.setQueryParams
                )}
                selectRow={getSelectRow({
                  entities,
                  ids: customersUIProps.ids,
                  setIds: customersUIProps.setIds,
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
