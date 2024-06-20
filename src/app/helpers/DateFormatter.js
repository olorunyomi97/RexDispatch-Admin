import React from "react";
import moment from "moment";

const DateFormatter = (date) => {
  return moment(date).format("MMMM Do YYYY, h:mm");
};

export default DateFormatter;
