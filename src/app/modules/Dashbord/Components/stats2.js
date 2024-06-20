import React, { useState, useEffect } from "react";
import UserSignups from "./SubComponents/user-signups";
import BusinessSignups from "./SubComponents/business-signups";
import axios from "axios";

const Stats2 = () => {
  const [data, set_data] = useState();
  const [business_data, set_business_data] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/recent_signups`)
      .then((resp) => {
        console.log(resp.data.dashboard.data[0]);
        set_data(resp.data.dashboard.data[0]);
        set_business_data(resp.data.dashboard.data[1]);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <UserSignups data={data} />
        </div>

        <div className="col-lg-6">
          <BusinessSignups data={business_data} />
        </div>
      </div>
    </div>
  );
};

export default Stats2;
