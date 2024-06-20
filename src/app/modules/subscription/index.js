import React, { Component } from "react";
import SubComponent from "./components/subcard";

export class Subscription extends Component {
  render() {
    return (
      <div>
        <SubComponent />
      </div>
    );
  }
}

export default Subscription;