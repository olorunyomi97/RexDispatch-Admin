import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/discounts/discountsActions";
import { DiscountEditDialogHeader } from "./DiscountEditDialogHeader";
import { DiscountEditForm } from "./DiscountEditForm";
import { useDiscountsUIContext } from "../DiscountsUIContext";

export function DiscountEditDialog({ id, show, onHide }) {
  // Discounts UI Context
  const discountsUIContext = useDiscountsUIContext();
  const discountsUIProps = useMemo(() => {
    return {
      initDiscount: discountsUIContext.initDiscount,
    };
  }, [discountsUIContext]);

  // Discounts Redux state
  const dispatch = useDispatch();
  const { actionsLoading, discountForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.discounts.actionsLoading,
      discountForEdit: state.discounts.discountForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting Discount by id
    dispatch(actions.fetchDiscount(id));
  }, [id, dispatch]);

  // server request for saving discount
  const saveDiscount = (discount) => {
    // server request for creating discount
    dispatch(actions.createDiscount(discount));
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <DiscountEditDialogHeader id={id} />
      <DiscountEditForm
        saveDiscount={saveDiscount}
        actionsLoading={actionsLoading}
        discount={discountForEdit || discountsUIProps.initDiscount}
        onHide={onHide}
      />
    </Modal>
  );
}
