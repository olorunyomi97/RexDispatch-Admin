import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";

export function DiscountEditDialogHeader({ id }) {
  // Discounts Redux state
  const { discountForEdit, actionsLoading } = useSelector(
    (state) => ({
      discountForEdit: state.discounts.discountForEdit,
      actionsLoading: state.discounts.actionsLoading,
    }),
    shallowEqual
  );

  const [title, setTitle] = useState("");
  // Title couting
  useEffect(() => {
    let _title = id ? "" : "New Discount";
    if (discountForEdit && id) {
      _title = `Edit discount '${discountForEdit.firstName} ${discountForEdit.lastName}'`;
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [discountForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
