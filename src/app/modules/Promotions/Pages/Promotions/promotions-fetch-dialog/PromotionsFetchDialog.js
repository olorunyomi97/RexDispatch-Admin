import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { PromotionStatusCssClasses } from "../PromotionsUIHelpers";
import { usePromotionsUIContext } from "../PromotionsUIContext";

const selectedPromotions = (entities, ids) => {
  const _promotions = [];
  ids.forEach((id) => {
    const promotion = entities.find((el) => el.id === id);
    if (promotion) {
      _promotions.push(promotion);
    }
  });
  return _promotions;
};

export function PromotionsFetchDialog({ show, onHide }) {
  // Promotions UI Context
  const promotionsUIContext = usePromotionsUIContext();
  const promotionsUIProps = useMemo(() => {
    return {
      ids: promotionsUIContext.ids,
      queryParams: promotionsUIContext.queryParams,
    };
  }, [promotionsUIContext]);

  // promotions Redux state
  const { promotions } = useSelector(
    (state) => ({
      promotions: selectedPromotions(
        state.promotions.entities,
        promotionsUIProps.ids
      ),
    }),
    shallowEqual
  );

  // if there weren't selected ids we should close modal
  useEffect(() => {
    if (!promotionsUIProps.ids || promotionsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promotionsUIProps.ids]);

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
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {promotions.map((promotion) => (
              <div className="list-timeline-item mb-3" key={promotion.id}>
                <span className="list-timeline-text">
                  <span
                    className={`label label-lg label-light-${
                      PromotionStatusCssClasses[promotion.status]
                    } label-inline`}
                    style={{ width: "60px" }}
                  >
                    ID: {promotion.id}
                  </span>{" "}
                  <span className="ml-5">
                    {promotion.manufacture}, {promotion.model}
                  </span>
                </span>
              </div>
            ))}
          </div>
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
