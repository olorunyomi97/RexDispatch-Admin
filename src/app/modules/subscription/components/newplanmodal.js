import React from 'react';
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function newplanmodal(props) {
    return (
        <div>
            <Modal show={props.showPlanModal} onHide={props.modalClose}>
            <div className="row pl-3 pr-3">
                <div className="col-md-2"></div>
                <div className="col-md-8 pb-4 pt-5 mb-5">
                    <p className="user_signup_subtext pt-5" style={{justifyContent:'center'}}>Add New Subscription</p>
                    <hr style={{width:'90%'}}/>
                    <div className="input_group pt-3 mb-4">
                        <p className="mb-2">Plan Name</p>
                        <input type="text" className="subplan_input " placeholder="Enter Plan Name" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-2">Amount</p>
                            <input type="text" className="subplan_input " placeholder="Enter Amount" />
                        </div>
                        <div className="col-md-6">
                            <p className="mb-2">Duration</p>
                            <select className="custom-select">
                                <option className="selector"defaultValue>Select Duration</option>
                                <option defaultValue="1">Monthly</option>
                                <option defaultValue="2">Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div className="input_group mt-4 mb-3">
                        <p className="mb-2">Enter Features</p>
                        <textarea type="text" className="subplan_input form-control" rows="3" placeholder="Seperate faetures using commas (,)" />
                    </div>
                    <div className="mt-5 mb-5">
                        <button className="new_plan_btn block" to="#" >Publish Subscription Plan</button>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </Modal>
        </div>
    )
}
