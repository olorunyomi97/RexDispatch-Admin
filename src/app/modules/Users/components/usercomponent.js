import React from 'react';

export default function usercomponent() {
    return (
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card dispatch_card p-5">
                <div classNam="mb-3">
                    <p className="dispatch_header">PROFILE OVERVIEW</p>
                    <div className="row">
                    <div className="col-md-2">
                        <p className="dispatch_details">First Name</p>
                        <p className="dispatch_items">Bigoloo</p>
                    </div>
                    <div className="col-md-2">
                        <p className="dispatch_details">Last Name</p>
                        <p className="dispatch_items">Vic O</p>
                    </div>
                    <div className="col-md-2">
                        <p className="dispatch_details">Email Address</p>
                        <p className="dispatch_items">Gokada@gmail.com</p>
                    </div>
                    <div className="col-md-2">
                        <p className="dispatch_details">Phone Number</p>
                        <p className="dispatch_items">07051014243</p>
                    </div>
                    <div className="col-md-2">
                        <p className="dispatch_details">Gender</p>
                        <p className="dispatch_items">male</p>
                    </div>
                    <div className="col-md-2">
                        <p className="dispatch_details">Date of Birth</p>
                        <p className="dispatch_items">date</p>
                    </div>
                    </div>
                </div>
                <hr />
                <div className="row" >
                    <div className="col-md-3">
                        <p className="dispatch_details">Address</p>
                        <p className="dispatch_items">44, Ajose Herbaculate Way</p>
                        </div>
                        <div className="col-md-2">
                            <p className="dispatch_details">Location</p>
                            <p className="dispatch_items">Gokada@gmail.com</p>
                        </div>
                        <div className="col-md-2">
                            <p className="dispatch_details">Date Joined</p>
                            <p className="dispatch_items">07051014243</p>
                        </div>
                        <div className="col-md-2">
                            <p className="dispatch_details">Transactions</p>
                            <p className="dispatch_items">male</p>
                        </div>
                        <div className="col-md-2">
                            <p className="dispatch_details">Total Amount</p>
                            <p className="dispatch_items">date</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
