import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/business/businessActions";
import { useBusinessUIContext } from "../BusinessUIContext";

export function BusinessDeleteDialog({ id, show, onHide }) {
  // Business UI Context
  const businessUIContext = useBusinessUIContext();
  const businessUIProps = useMemo(() => {
    return {
      setIds: businessUIContext.setIds,
      queryParams: businessUIContext.queryParams,
    };
  }, [businessUIContext]);

  // Business Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.business.actionsLoading }),
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

  const deleteBusiness = () => {
    // server request for deleting Business by id
    // dispatch(actions.deleteBusiness(id)).then(() => {
    //   // refresh list after deletion
    //   dispatch(actions.fetchBusiness(businessUIProps.queryParams));
    //   // clear selections list
    //   businessUIProps.setIds([]);
    //   // closing delete modal
    //   onHide();
    // });
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
          Business Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete this business?</span>
        )}
        {isLoading && <span>Business is deleting...</span>}
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
            onClick={deleteBusiness}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
