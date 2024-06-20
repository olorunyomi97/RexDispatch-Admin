// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import * as Yup from "yup";
import {
  Input,
  Select,
  DatePickerField,
} from "../../../../../../_metronic/_partials/controls";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

// Validation schema
const PromotionEditSchema = Yup.object().shape({
  promotion_name: Yup.string()
    .min(3, "Minimum 3 letters")
    .max(50, "Maximum 50 letters")
    .required("Name is required"),
  start_date: Yup.date()
    .min(new Date(), "Please enter a valid date")
    .required("Start Date is required"),
  end_date: Yup.date()
    .min(new Date(), "Please enter a valid date")
    .required("End Date is required"),
  promotion_percent: Yup.number()
    .min(1, "1% is minimum")
    .max(100, "100% is maximum")
    .required("Percentage is required"),
});

export function PromotionEditForm({ promotion, savePromotion }) {
  // const [open, setOpen] = useState(false);
  // const [percentage, setPercentage] = useState(false);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={promotion}
        validationSchema={PromotionEditSchema}
        onSubmit={(value) => {
          let values = JSON.parse(JSON.stringify(value));
          savePromotion(values);
          console.log(value);
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className="form ">
              <div className="form-group row">
                <div className="col-lg-4">
                  <Field
                    name="promotion_name"
                    component={Input}
                    placeholder="Name"
                    label="Name"
                  />
                </div>
                <div className="col-lg-4">
                  <Field
                    type="number"
                    name="promotion_percent"
                    component={Input}
                    placeholder="Percentage"
                    label="Percentage"
                  />
                </div>
              </div>

              <div className="form-group row mt-5">
                <div className="col-lg-4">
                  <DatePickerField
                    name="start_date"
                    placeholder="Start Date"
                    label="Start Date"
                  />
                </div>
                <div className="col-lg-4">
                  <DatePickerField
                    name="end_date"
                    placeholder="End Date"
                    label="End Date"
                    // dateFormat="yyyy/MM/dd"
                  />
                </div>
              </div>
              {/* <div className="col-lg-4">
                  <h6 className="mt-5">Please select the amount of products</h6>
                  <div className=" mt-3">
                    <Select name="products" label="products">
                      <option value="">please select...</option>
                      <option value="site-wide">site-wide</option>
                      <option value="categories">
                        categoreis
                      </option>
                    </Select>
                  </div>
                </div> */}

              <div className="form-group" style={{ float: "right" }}>
                <button type="reset" className="btn btn-light ml-2">
                  <i className="fa fa-redo"></i>
                  Reset
                </button>
                <></>
                <button type="submit" className="btn btn-primary btn-elevate">
                  Save
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
