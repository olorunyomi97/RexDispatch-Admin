/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import * as actions from "../../../redux/promotions/promotionsActions";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { PromotionEditForm } from "./PromotionEditForm";
// import { Specifications } from "../promotion-specifications/Specifications";
// import { SpecificationsUIProvider } from "../promotion-specifications/SpecificationsUIContext";
import { useSubheader } from "../../../../../../_metronic/layout";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
// import { RemarksUIProvider } from "../promotion-remarks/RemarksUIContext";
// import { Remarks } from "../promotion-remarks/Remarks";

const initPromotion = {
  promotion_name: "",
  start_date: "",
  end_date: "",
  promotion_percent: "",
};

export function PromotionEdit({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [tab, setTab] = useState("basic");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, promotionForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.promotions.actionsLoading,
      promotionForEdit: state.promotions.promotionForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchPromotion(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = id ? "" : "New Promotion";
    if (promotionForEdit && id) {
      _title = `Edit promotion '${promotionForEdit.manufacture} ${promotionForEdit.model} - ${promotionForEdit.modelYear}'`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promotionForEdit, id]);

  const savePromotion = (values) => {
    dispatch(actions.createPromotion(values)).then(() =>
      backToPromotionsList()
    );
  };

  const backToPromotionsList = () => {
    history.push(`/promotions/promotions`);
  };

  return (
    <div className="">
      <Card>
        {actionsLoading && <ModalProgressBar />}
        <CardHeader title={title}>
          <CardHeaderToolbar>
            <button
              type="button"
              onClick={backToPromotionsList}
              className="btn btn-light"
            >
              <i className="fa fa-arrow-left"></i>
              Back
            </button>
            {`  `}
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <ul className="nav nav-tabs nav-tabs-line " role="tablist">
            <li className="nav-item" onClick={() => setTab("basic")}>
              <a
                className={`nav-link ${tab === "basic" && "active"}`}
                data-toggle="tab"
                role="tab"
                aria-selected={(tab === "basic").toString()}
              >
                Basic info
              </a>
            </li>
            {/* <li className="nav-item" onClick={() => setTab("remarks")}>
              <a
                className={`nav-link ${tab === "remarks" && "active"}`}
                data-toggle="tab"
                role="button"
                aria-selected={(tab === "remarks").toString()}
              >
                Promotion remarks
              </a>
            </li> */}
            {/* {id && (
              <>
                {" "}
                <li className="nav-item" onClick={() => setTab("specs")}>
                  <a
                    className={`nav-link ${tab === "specs" && "active"}`}
                    data-toggle="tab"
                    role="tab"
                    aria-selected={(tab === "specs").toString()}
                  >
                    Promotion specifications
                  </a>
                </li>
              </>
            )} */}
          </ul>
          <div className="mt-5">
            {tab === "basic" && (
              <PromotionEditForm
                actionsLoading={actionsLoading}
                promotion={promotionForEdit || initPromotion}
                savePromotion={savePromotion}
              />
            )}
            {/* {tab === "remarks" && ( */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
