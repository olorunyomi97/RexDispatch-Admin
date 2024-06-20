import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";

export function BusinessEditDialogHeader({ id }) {
  // Businessedux state
  const { businessForEdit, actionsLoading } = useSelector(
    (state) => ({
      businessForEdit: state.business.businessForEdit,
      actionsLoading: state.business.actionsLoading,
    }),
    shallowEqual
  );

  const [title, setTitle] = useState("");
  // Title couting
  useEffect(() => {
    let _title = id ? "" : "New Business";
    if (businessForEdit && id) {
      _title = `Edit business '${businessForEdit.firstName} ${businessForEdit.lastName}'`;
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [businessForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
