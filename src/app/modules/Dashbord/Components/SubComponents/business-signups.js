import React from "react";

const BusinessSignups = (props) => {
  const data = props.data;

  return (
    <div className="row mt-5 mb-5">
      <div className="col-md-12">
        <div className="card p-5">
          <p className="user_signups p-3">RECENT BUSINESS SIGN-UPS</p>
          {data &&
            data.map((data) => {
              return (
                <div key={data._id}>
                  <div>
                    <p className="user_signup_subtext pl-3">
                      {data.business_name}
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
export default BusinessSignups;
