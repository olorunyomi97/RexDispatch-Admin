/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../redux/promotions/promotionsActions";
import { usePromotionsUIContext } from "../PromotionsUIContext";

export function PromotionDeleteDialog({ id, show, onHide }) {
  //Promotions UI Context
  const promotionsUIContext = usePromotionsUIContext();
  const promotionsUIProps = useMemo(() => {
    return {
      setIds: promotionsUIContext.setIds,
      queryParams: promotionsUIContext.queryParams,
    };
  }, [promotionsUIContext]);

  // promotions Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.promotions.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deletePromotion = () => {
    // server request for deleting Promotion by id
    dispatch(actions.deletePromotion(id)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchPromotions(promotionsUIProps.queryParams));
      // clear selections list
      promotionsUIProps.setIds([]);
      // closing delete modal
      onHide();
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Promotion Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete this promotion?</span>
        )}
        {isLoading && <span>Promotion is deleting...</span>}
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
            onClick={deletePromotion}
            className="btn btn-delete btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
