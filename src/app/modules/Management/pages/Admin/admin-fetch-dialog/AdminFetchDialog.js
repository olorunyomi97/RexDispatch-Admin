import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { AdminStatusCssClasses } from "../AdminUIHelpers";
import { useAdminsUIContext } from "../AdminUIContext";

const selectedAdmins = (entities, ids) => {
  const _admins = [];
  ids.forEach((id) => {
    const admin = entities.find((el) => el.id === id);
    if (admin) {
      _admins.push(admin);
    }
  });
  return _admins;
};

export function AdminsFetchDialog({ show, onHide }) {
  // Admins UI Context
  const adminsUIContext = useAdminsUIContext();
  const adminsUIProps = useMemo(() => {
    return {
      ids: adminsUIContext.ids,
    };
  }, [adminsUIContext]);

  // admins Redux state
  const { admins } = useSelector(
    (state) => ({
      admins: selectedAdmins(state.admins.entities, adminsUIProps.ids),
    }),
    shallowEqual
  );

  // if admins weren't selected we should close modal
  useEffect(() => {
    if (!adminsUIProps.ids || adminsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminsUIProps.ids]);

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
        <div className="timeline timeline-5 mt-3">
          {admins.map((admin) => (
            <div
              className="timeline-item align-items-start"
              key={`id${admin.id}`}
            >
              <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg text-right pr-3" />
              <div className="timeline-badge">
                <i
                  className={`fa fa-genderless text-${
                    AdminStatusCssClasses[admin.status]
                  } icon-xxl`}
                />
              </div>
              <div className="timeline-content text-dark-50 mr-5">
                <span
                  className={`label label-lg label-light-${
                    AdminStatusCssClasses[admin.status]
                  } label-inline`}
                >
                  ID: {admin.id}
                </span>
                <span className="ml-3">
                  {admin.lastname}, {admin.firstname}
                </span>
              </div>
            </div>
          ))}
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
