import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { DiscountStatusCssClasses } from "../DiscountsUIHelpers";
import * as actions from "../../../redux/discounts/discountsActions";
import { useDiscountsUIContext } from "../DiscountsUIContext";

const selectedDiscounts = (entities, ids) => {
  const _discounts = [];
  ids.forEach((id) => {
    const discount = entities.find((el) => el.id === id);
    if (discount) {
      _discounts.push(discount);
    }
  });
  return _discounts;
};

export function DiscountsUpdateStateDialog({ show, onHide }) {
  // discounts UI Context
  const discountsUIContext = useDiscountsUIContext();
  const discountsUIProps = useMemo(() => {
    return {
      ids: discountsUIContext.ids,
      setIds: discountsUIContext.setIds,
      queryParams: discountsUIContext.queryParams,
    };
  }, [discountsUIContext]);

  // discounts Redux state
  const { discounts, isLoading } = useSelector(
    (state) => ({
      discounts: selectedDiscounts(
        state.discounts.entities,
        discountsUIProps.ids
      ),
      isLoading: state.discounts.actionsLoading,
    }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!discountsUIProps.ids || discountsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discountsUIProps.ids]);

  const [status, setStatus] = useState(0);

  const dispatch = useDispatch();
  const updateStatus = () => {
    // server request for update discounts status by selected ids
    dispatch(actions.updateDiscountsStatus(discountsUIProps.ids, status)).then(
      () => {
        // refresh list after deletion
        dispatch(actions.fetchDiscounts(discountsUIProps.queryParams)).then(
          () => {
            // clear selections list
            discountsUIProps.setIds([]);
            // closing delete modal
            onHide();
          }
        );
      }
    );
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Status has been updated for selected discounts
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
          {discounts.map((discount) => (
            <div
              className="timeline-item align-items-start"
              key={`discountsUpdate${discount.id}`}
            >
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg text-right pr-3" />
              <div className="timeline-badge">
                <i
                  className={`fa fa-genderless text-${
                    DiscountStatusCssClasses[discount.status]
                  } icon-xxl`}
                />
              </div>
              <div className="timeline-content text-dark-50 mr-5">
                <span
                  className={`label label-lg label-light-${
                    DiscountStatusCssClasses[discount.status]
                  } label-inline`}
                >
                  ID: {discount.id}
                </span>
                <span className="ml-3">
                  {discount.lastName}, {discount.firstName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer className="form">
        <div className="form-group">
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(+e.target.value)}
          >
            <option value="0">Inactive</option>
            <option value="1">Active</option>
          </select>
        </div>
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
