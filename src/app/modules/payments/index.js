import React, { Component } from "react";
import Card1 from "./components/paymentcard1";
import Card2 from "./components/paymentcard2";

export class Payment extends Component {
  render() {
    return (
      <div>
        <Card1 />
        <Card2 />
      </div>
    );
  }
}

export default Payment;
