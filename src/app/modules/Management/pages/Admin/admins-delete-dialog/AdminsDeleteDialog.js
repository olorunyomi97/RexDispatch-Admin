import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/admins/adminsActions";
import { useAdminsUIContext } from "../AdminUIContext";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";

export function AdminsDeleteDialog({ show, onHide }) {
  // Admins UI Context
  const adminsUIContext = useAdminsUIContext();
  const adminsUIProps = useMemo(() => {
    return {
      ids: adminsUIContext.ids,
      setIds: adminsUIContext.setIds,
      queryParams: adminsUIContext.queryParams,
    };
  }, [adminsUIContext]);

  // admins Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.admins.actionsLoading }),
    shallowEqual
  );

  // if admins weren't selected we should close modal
  useEffect(() => {
    if (!adminsUIProps.ids || adminsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminsUIProps.ids]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteAdmins = () => {
    // server request for deleting admin by selected ids
    dispatch(actions.deleteAdmins(adminsUIProps.ids)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchAdmins(adminsUIProps.queryParams)).then(() => {
        // clear selections list
        adminsUIProps.setIds([]);
        // closing delete modal
        onHide();
      });
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
          Admins Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete selected admins?</span>
        )}
        {isLoading && <span>Admin are deleting...</span>}
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
            onClick={deleteAdmins}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
