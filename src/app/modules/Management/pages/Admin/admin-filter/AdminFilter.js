import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { useAdminsUIContext } from "../AdminUIContext";

const prepareFilter = (queryParams, values) => {
  const { status, type, searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {};
  // Filter by status
  filter.is_active = status !== "" ? status : "";
  // Filter by type
  // filter.type = type !== "" ? type : undefined;
  // Filter by all fields
  filter.lastname = searchText;
  if (searchText) {
    filter.firstname = searchText;
    filter.email = searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function AdminsFilter({ listLoading }) {
  // Admins UI Context
  const adminsUIContext = useAdminsUIContext();
  const adminsUIProps = useMemo(() => {
    return {
      queryParams: adminsUIContext.queryParams,
      setQueryParams: adminsUIContext.setQueryParams,
    };
  }, [adminsUIContext]);

  // queryParams, setQueryParams,
  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(adminsUIProps.queryParams, values);
    if (!isEqual(newQueryParams, adminsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      // update list by queryParams
      adminsUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          status: "", // values => All=""/Susspended=0/Active=1/
          type: "", // values => All=""/Administrator=0/Manager=1
          searchText: "",
        }}
        onSubmit={(values) => {
          applyFilter(values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-2">
                <select
                  className="form-control"
                  name="status"
                  placeholder="Filter by Status"
                  // TODO: Change this code
                  onChange={(e) => {
                    setFieldValue("status", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.status}
                >
                  <option value="">All</option>
                  <option value="0">Inactive</option>
                  <option value="1">Active</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Status
                </small>
              </div>
              {/* <div className="col-lg-2">
                <select
                  className="form-control"
                  placeholder="Filter by Type"
                  name="type"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setFieldValue("type", e.target.value);
                    handleSubmit();
                  }}
                  value={values.type}
                >
                  <option value="">All</option>
                  <option value="0">Administrator</option>
                  <option value="1">Manager</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Type
                </small>
              </div> */}
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Search"
                  onBlur={handleBlur}
                  value={values.searchText}
                  onChange={(e) => {
                    setFieldValue("searchText", e.target.value);
                    handleSubmit();
                  }}
                />
                <small className="form-text text-muted">
                  <b>Search</b> in all fields
                </small>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
