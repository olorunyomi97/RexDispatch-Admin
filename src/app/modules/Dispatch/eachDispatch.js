import React, { useState, useEffect } from "react";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";
import axios from "axios";
function EachDispatch(props) {
  const [data, set_data] = useState({});

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/single_dispatch/${props.match.params.id}`
      )
      .then((resp) => {
        set_data(resp.data.data[0]);
      });
  }, []);

  return (
    <div>
      <Card1 data={data} />
      <Card2 data={data} />
      {/* <Card3 /> */}
    </div>
  );
}

export default EachDispatch;
