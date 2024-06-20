import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { DiscountStatusCssClasses } from "../DiscountsUIHelpers";
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

export function DiscountsFetchDialog({ show, onHide }) {
  // discounts UI Context
  const discountsUIContext = useDiscountsUIContext();
  const discountsUIProps = useMemo(() => {
    return {
      ids: discountsUIContext.ids,
    };
  }, [discountsUIContext]);

  // discounts Redux state
  const { discounts } = useSelector(
    (state) => ({
      discounts: selectedDiscounts(
        state.discounts.entities,
        discountsUIProps.ids
      ),
    }),
    shallowEqual
  );

  // if discounts weren't selected we should close modal
  useEffect(() => {
    if (!discountsUIProps.ids || discountsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discountsUIProps.ids]);

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
          {discounts.map((discount) => (
            <div
              className="timeline-item align-items-start"
              key={`id${discount.id}`}
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
