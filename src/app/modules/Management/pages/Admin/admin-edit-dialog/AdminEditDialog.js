import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/admins/adminsActions";
import { AdminEditDialogHeader } from "./AdminEditDialogHeader";
import { AdminEditForm } from "./AdminEditForm";
import { useAdminsUIContext } from "../AdminUIContext";

export function AdminEditDialog({ id, show, onHide }) {
  // Admins UI Context

  const adminsUIContext = useAdminsUIContext();
  const adminsUIProps = useMemo(() => {
    return {
      initAdmin: adminsUIContext.initAdmin,
    };
  }, [adminsUIContext]);

  // Admins Redux state
  const dispatch = useDispatch();
  const { actionsLoading, adminForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.admins.actionsLoading,
      adminForEdit: state.admins.adminForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting admin by id
    dispatch(actions.fetchAdmin(id));
  }, [id, dispatch]);

  // server request for saving admin
  const saveAdmin = (admin) => {
    if (!id) {
      // server request for creating admin
      dispatch(actions.createAdmin(admin)).then(() => onHide());
    } else {
      // server request for updating admin
      dispatch(actions.updateAdmin(admin)).then(() => onHide());
    }
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <AdminEditDialogHeader id={id} />
      <AdminEditForm
        saveAdmin={saveAdmin}
        actionsLoading={actionsLoading}
        admin={adminForEdit || adminsUIProps.initAdmin}
        onHide={onHide}
      />
    </Modal>
  );
}
