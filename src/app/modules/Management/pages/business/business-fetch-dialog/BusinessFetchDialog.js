import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { BusinessStatusCssClasses } from "../BusinessUIHelpers";
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

export function BusinessFetchDialog({ show, onHide }) {
  // Business UI Context
  const businessUIContext = useBusinessUIContext();
  const businessUIProps = useMemo(() => {
    return {
      ids: businessUIContext.ids,
    };
  }, [businessUIContext]);

  // business Redux state
  const { business } = useSelector(
    (state) => ({
      business: selectedBusiness(state.business.entities, businessUIProps.ids),
    }),
    shallowEqual
  );

  // if business weren't selected we should close modal
  useEffect(() => {
    if (!businessUIProps.ids || businessUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessUIProps.ids]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Fetch selected elements
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="timeline timeline-5 mt-3">
          {business.map((business) => (
            <div
              className="timeline-item align-items-start"
              key={`id${business.id}`}
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
                  {business.lastname}, {business.firstname}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-primary btn-elevate"
          >
            Ok
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
