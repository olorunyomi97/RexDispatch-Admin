import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../redux/discounts/discountsActions";
import { useDiscountsUIContext } from "../DiscountsUIContext";

export function DiscountDeleteDialog({ id, show, onHide }) {
  // Discounts UI Context
  const discountsUIContext = useDiscountsUIContext();
  const discountsUIProps = useMemo(() => {
    return {
      setIds: discountsUIContext.setIds,
      queryParams: discountsUIContext.queryParams,
    };
  }, [discountsUIContext]);

  // discounts Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.discounts.actionsLoading }),
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

  const deleteDiscount = () => {
    // server request for deleting Discount by id
    dispatch(actions.deleteDiscount(id)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchDiscounts(discountsUIProps.queryParams));
      // clear selections list
      discountsUIProps.setIds([]);
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
      {/*begin::Loading*/}
      {isLoading && <ModalProgressBar />}
      {/*end::Loading*/}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Discount Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete this discount?</span>
        )}
        {isLoading && <span>Discount is deleting...</span>}
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
            onClick={deleteDiscount}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
