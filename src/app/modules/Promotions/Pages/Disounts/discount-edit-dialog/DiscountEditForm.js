// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Select,
  DatePickerField,
} from "../../../../../../_metronic/_partials/controls";

// Validation schema
const DiscountEditSchema = Yup.object().shape({
  discount_code: Yup.string()
    .min(5, "Minimum 5 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Discount Code is required"),
  start_date: Yup.date()
    .min(new Date(), "Please enter a valid date")
    .required("Start Date is required"),
  end_date: Yup.date()
    .min(new Date(), "Please enter a valid date")
    .required("End Date is required"),

  amount: Yup.number()
    .min(1, "1 is minimum")

    .required("Discount is required"),
});

export function DiscountEditForm({
  saveDiscount,
  discount,
  actionsLoading,
  onHide,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={discount}
        validationSchema={DiscountEditSchema}
        onSubmit={(value) => {
          let values = JSON.parse(JSON.stringify(value));
          saveDiscount(values);
          console.log(values);
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
                {/* Email */}
                <div className="form-group row">
                  <div className="col-lg-4">
                    <Field
                      name="discount_code"
                      component={Input}
                      placeholder="Discount Code"
                      label="Discount Code"
                    />
                  </div>

                  <div className="col-lg-4">
                    <DatePickerField
                      name="start_date"
                      placeholder="Start Date"
                      label="Start Date"
                    />
                  </div>
                  {/* Date of birth */}
                  <div className="col-lg-4">
                    <DatePickerField
                      name="end_date"
                      placeholder="End Date"
                      label="End Date"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-4">
                    <Field
                      type="number"
                      name="amount"
                      component={Input}
                      placeholder="Amount"
                      label="Amount"
                      customFeedbackLabel="Please enter amount"
                    />
                  </div>
                  <div className="col-md-4 mt-5">
                    <Select name="currency" label="">
                      <option value="dollars">Dollars</option>
                      <option value="euros">Euros</option>
                      <option value="naira">Naira</option>
                      <option value="pounds">Pounds</option>
                    </Select>
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
