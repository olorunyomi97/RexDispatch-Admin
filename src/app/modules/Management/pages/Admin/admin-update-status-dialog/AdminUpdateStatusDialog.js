import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AdminStatusCssClasses } from "../AdminUIHelpers";
import * as actions from "../../../_redux/admins/adminsActions";
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

export function AdminsUpdateStateDialog({ show, onHide }) {
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
  const { admins, isLoading } = useSelector(
    (state) => ({
      admins: selectedAdmins(state.admins.entities, adminsUIProps.ids),
      isLoading: state.admins.actionsLoading,
    }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!adminsUIProps.ids || adminsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminsUIProps.ids]);

  const [status, setStatus] = useState(0);

  const dispatch = useDispatch();
  const updateStatus = () => {
    // server request for update admins status by selected ids
    console.log(admins[0]._id);
    dispatch(actions.updateAdminsStatus(admins[0]._id)).then(() => {
      // refresh list after deletion
      // dispatch(actions.fetchAdmins(adminsUIProps.queryParams)).then(() => {
      // clear selections list
      // adminsUIProps.setIds();
      // closing delete modal
      onHide();
      // });
    });
  };

  // console.log(admins);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Status would been updated for selected admin
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overlay overlay-block">
        {/*begin::Loading*/}
        {isLoading && (
          <div className="overlay-layer">
            <div className="spinner spinner-lg spinner-primary" />
          </div>
        )}
        {/*end::Loading*/}

        <div className="timeline timeline-5 mt-3">
          {admins.map((admin) => (
            <div
              className="timeline-item align-items-start"
              key={`adminsUpdate${admin._id}`}
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
                  {admin.firstname} {admin.lastname}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer className="form">
        {/* <div className="form-group">
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(+e.target.value)}
          >
            <option value="0">Inactive</option>
            <option value="1">Active</option>
          </select>
        </div> */}
        <div className="form-group">
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate mr-3"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={updateStatus}
            className="btn btn-primary btn-elevate"
          >
            Update Status
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
