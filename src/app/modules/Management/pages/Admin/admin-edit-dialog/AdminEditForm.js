// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input } from "../../../../../../_metronic/_partials/controls";

// Validation schema
const AdminEditSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Firstname is required"),
  lastname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Lastname is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  phone: Yup.string()
    .min(10, "the phone number is invalid")
    .required("Phone number is required "),
  role: Yup.string().required("please select a role"),
});

export function AdminEditForm({ saveAdmin, actionsLoading, onHide }) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          email: "",
          role: "",
          firstname: "",
          lastname: "",
          phone: "",
        }}
        validationSchema={AdminEditSchema}
        onSubmit={(values) => {
          saveAdmin(values);
          // console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Modal.Body className="overlay overlay-block">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}

              <Form className="form form-label-right">
                <div className="form-group row">
                  {/* First Name */}
                  <div className="col-lg-6">
                    <Field
                      name="firstname"
                      component={Input}
                      placeholder="First Name"
                      label="First Name"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="col-lg-6">
                    <Field
                      name="lastname"
                      component={Input}
                      placeholder="Last Name"
                      label="Last Name"
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="form-group row">
                  <div className="col-lg-6">
                    <Field
                      type="email"
                      name="email"
                      component={Input}
                      placeholder="Email"
                      label="Email"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Field
                      type="tel"
                      name="phone"
                      component={Input}
                      placeholder="phone"
                      label="phone"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  {/* Type */}
                  <div className="col-lg-6">
                    <Field
                      as="select"
                      className="form-control"
                      name="role"
                      label="role"
                    >
                      <option value="">select a role</option>
                      <option value="admin">Administrator</option>
                      <option value="auditor">Auditor</option>
                    </Field>
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                onClick={onHide}
                className="btn btn-light btn-elevate"
              >
                Cancel
              </button>
              <> </>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="btn btn-primary btn-elevate"
              >
                Save
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
}
