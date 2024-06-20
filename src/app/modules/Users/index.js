import React, { Component } from "react";
import UserComponent from "./components/usercomponent";
import UserComponent2 from "./components/usercomponent2";

export class Users extends Component {
  render() {
    return (
      <div>
        <UserComponent />
        <UserComponent2 />
      </div>
    );
  }
}

export default Users;