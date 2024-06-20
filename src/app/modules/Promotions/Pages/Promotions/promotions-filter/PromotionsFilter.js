import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
import { usePromotionsUIContext } from "../PromotionsUIContext";

const prepareFilter = (queryParams, values) => {
  const { status, searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {};
  // Filter by status
  filter.promo_status = status !== "" ? status : "";
  // Filter by all fields
  filter.promo_name = searchText;
  if (searchText) {
    filter.manufacture = searchText;
    filter.VINCode = searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function PromotionsFilter({ listLoading }) {
  // Promotions UI Context
  const promotionsUIContext = usePromotionsUIContext();
  const promotionsUIProps = useMemo(() => {
    return {
      setQueryParams: promotionsUIContext.setQueryParams,
      queryParams: promotionsUIContext.queryParams,
    };
  }, [promotionsUIContext]);

  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(promotionsUIProps.queryParams, values);
    if (!isEqual(newQueryParams, promotionsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      promotionsUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          status: "", // values => All=""/Inactive=0/Active=1
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
                  onChange={(e) => {
                    setFieldValue("status", e.target.value);
                    handleSubmit();
                  }}
                  onBlur={handleBlur}
                  value={values.status}
                >
                  <option value="">All</option>
                  <option value="expired">expired</option>
                  <option value="pending">Pending</option>
                  <option value="in progress">In progress</option>
                  <option value="disabled">Disabled</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Status
                </small>
              </div>

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
