import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BusinessStatusCssClasses } from "../BusinessUIHelpers";
import * as actions from "../../../_redux/business/businessActions";
import { useBusinessUIContext } from "../BusinessUIContext";

const selectedBusiness = (entities, ids) => {
  const _business = [];
  ids.forEach((id) => {
    const business = entities.find((el) => el.id === id);
    if (business) {
      _business.push(business);
    }
  });
  return _business;
};

export function BusinessUpdateStateDialog({ show, onHide }) {
  // Business UI Context
  const businessUIContext = useBusinessUIContext();
  const businessUIProps = useMemo(() => {
    return {
      ids: businessUIContext.ids,
      setIds: businessUIContext.setIds,
      queryParams: businessUIContext.queryParams,
    };
  }, [businessUIContext]);

  // business Redux state
  const { business, isLoading } = useSelector(
    (state) => ({
      business: selectedBusiness(state.business.entities, businessUIProps.ids),
      isLoading: state.business.actionsLoading,
    }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!businessUIProps.ids || businessUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessUIProps.ids]);

  const [status, setStatus] = useState(0);

  const dispatch = useDispatch();
  const updateStatus = () => {
    // server request for update Business status by selected ids
    dispatch(actions.updateBusinessStatus(businessUIProps.ids)).then(() => {
      // refresh list after deletion
      // dispatch(actions.fetchBusiness(businessUIProps.queryParams)).then(() => {
      // clear selections list
      // businessUIProps.setIds();
      // closing delete modal
      onHide();
      // });
    });
  };

  // console.log(business);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Status would been updated for selected business
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overlay overlay-block">
        {/*begin::Loading*/}
        {isLoading && (
          <div className="overlay-layer">
            <div className="spinner spinner-lg spinner-primary" />
          </div>
        )}
        {/*end::Loading*/}

        <div className="timeline timeline-5 mt-3">
          {business.map((business) => (
            <div
              className="timeline-item align-items-start"
              key={`businessUpdate${business.id}`}
            >
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg text-right pr-3" />
              <div className="timeline-badge">
                <i
                  className={`fa fa-genderless text-${
                    BusinessStatusCssClasses[business.status]
                  } icon-xxl`}
                />
              </div>
              <div className="timeline-content text-dark-50 mr-5">
                <span
                  className={`label label-lg label-light-${
                    BusinessStatusCssClasses[business.status]
                  } label-inline`}
                >
                  ID: {business.id}
                </span>
                <span className="ml-3">
                  {business.firstname} {business.lastname}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer className="form">
        {/* <div className="form-group">
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(+e.target.value)}
          >
            <option value="0">Inactive</option>
            <option value="1">Active</option>
          </select>
        </div> */}
        <div className="form-group">
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate mr-3"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={updateStatus}
            className="btn btn-primary btn-elevate"
          >
            Update Status
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
