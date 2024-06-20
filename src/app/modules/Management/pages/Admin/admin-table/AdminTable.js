// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/admins/adminsActions";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
  headerSortingClasses,
} from "../../../../../../_metronic/_helpers";
import * as uiHelpers from "../AdminUIHelpers";
import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { useAdminsUIContext } from "../AdminUIContext";

export function AdminsTable() {
  const { user } = useSelector((state) => state.auth);
  // Admins UI Context
  const adminsUIContext = useAdminsUIContext();
  const adminsUIProps = useMemo(() => {
    return {
      ids: adminsUIContext.ids,
      setIds: adminsUIContext.setIds,
      queryParams: adminsUIContext.queryParams,
      setQueryParams: adminsUIContext.setQueryParams,
      openEditAdminDialog: adminsUIContext.openEditAdminDialog,
      openDeleteAdminDialog: adminsUIContext.openDeleteAdminDialog,
    };
  }, [adminsUIContext]);

  // Getting curret state of admins list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.admins }),
    shallowEqual
  );
  const { totalCount, entities, listLoading, initial_entity } = currentState;

  // Admins Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // clear selections list
    adminsUIProps.setIds([]);
    // server call by queryParams
    dispatch(actions.fetchAdmins(adminsUIProps.queryParams, initial_entity));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminsUIProps.queryParams, dispatch]);
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
      text: "Firstname",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "lastname",
      text: "Lastname",
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
      dataField: "is_active",
      text: "Status",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.StatusColumnFormatter,
      headerSortingClasses,
    },
    {
      dataField: "role",
      text: "Role",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.TypeColumnFormatter,
    },
  ];

  const admin_columns = [
    // {
    //   dataField: "id",
    //   text: "ID",
    //   sort: true,
    //   sortCaret: sortCaret,
    //   headerSortingClasses,
    // },
    {
      dataField: "firstname",
      text: "Firstname",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "lastname",
      text: "Lastname",
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
    {
      dataField: "is_active",
      text: "Status",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.StatusColumnFormatter,
      headerSortingClasses,
    },
    {
      dataField: "admin_role",
      text: "Role",
      sort: true,
      sortCaret: sortCaret,
      formatter: columnFormatters.TypeColumnFormatter,
    },

    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        openEditAdminDialog: adminsUIProps.openEditAdminDialog,
        openDeleteAdminDialog: adminsUIProps.openDeleteAdminDialog,
      },
      classes: "text-center pr-0",
      headerClasses: "text-right pr-3",
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
    sizePerPage: adminsUIProps.queryParams.pageSize,
    page: adminsUIProps.queryParams.pageNumber,
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
              {user.is_super_admin == true ? (
                <BootstrapTable
                  wrapperClasses="table-responsive"
                  bordered={false}
                  classes="table table-head-custom table-vertical-center"
                  bootstrap4
                  keyField="_id"
                  data={entities === null ? [] : entities}
                  columns={admin_columns}
                  // defaultSorted={uiHelpers.defaultSorted}
                  onTableChange={getHandlerTableChange(
                    adminsUIProps.setQueryParams
                  )}
                  selectRow={getSelectRow({
                    entities,
                    ids: adminsUIProps.ids,
                    setIds: adminsUIProps.setIds,
                  })}
                  {...paginationTableProps}
                >
                  {" "}
                  <PleaseWaitMessage entities={entities} />
                  <NoRecordsFoundMessage entities={entities} />
                </BootstrapTable>
              ) : (
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
                    adminsUIProps.setQueryParams
                  )}
                  selectRow={getSelectRow({
                    entities,
                    ids: adminsUIProps.ids,
                    setIds: adminsUIProps.setIds,
                  })}
                  {...paginationTableProps}
                >
                  <PleaseWaitMessage entities={entities} />
                  <NoRecordsFoundMessage entities={entities} />
                </BootstrapTable>
              )}
            </Pagination>
          );
        }}
      </PaginationProvider>
    </>
  );
}
