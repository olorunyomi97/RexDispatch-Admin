import React from "react";

import "./subcomponent.css";

const UserSignup = (props) => {
  const data = props.data;

  return (
    <div className="row mt-5 mb-5">
      <div className="col-md-12">
        <div className="card p-5">
          <p className="user_signups p-3">RECENT CUSTOMER SIGN-UPS</p>
          {data &&
            data.map((data) => {
              return (
                <div key={data._id}>
                  <div>
                    <p className="user_signup_subtext pl-3">
                      {data.firstname} {data.lastname}
                    </p>
                    <p className="user_signup_item pl-3">{data.email}</p>
                  </div>
                  <hr style={{ width: "90%" }} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
