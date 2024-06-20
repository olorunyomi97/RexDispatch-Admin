import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/business/businessActions";
import { BusinessEditDialogHeader } from "./BusinessEditDialogHeader";
import { BusinessEditForm } from "./BusinessEditForm";
import { useBusinessUIContext } from "../BusinessUIContext";

export function BusinessEditDialog({ id, show, onHide }) {
  // Business UI Context

  const businessUIContext = useBusinessUIContext();
  const businessUIProps = useMemo(() => {
    return {
      initBusiness: businessUIContext.initBusiness,
    };
  }, [businessUIContext]);

  // Business Redux state
  const dispatch = useDispatch();
  const { actionsLoading, businessForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.business.actionsLoading,
      businessForEdit: state.business.businessForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting business by id
    dispatch(actions.fetchEachBusiness(id));
  }, [id, dispatch]);

  // server request for saving Business
  const saveBusiness = (business) => {
    if (!id) {
      // server request for creating business
      dispatch(actions.createBusiness(business)).then(() => onHide());
    } else {
      // server request for updating business
      dispatch(actions.updateBusiness(business)).then(() => onHide());
    }
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <BusinessEditDialogHeader id={id} />
      <BusinessEditForm
        saveBusiness={saveBusiness}
        actionsLoading={actionsLoading}
        business={businessForEdit || businessUIProps.initBusiness}
        onHide={onHide}
      />
    </Modal>
  );
}
