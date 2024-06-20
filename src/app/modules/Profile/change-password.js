import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
// import ;

export class Update_password extends Component {
  constructor () {
    super();
    this.state = {
      old_password: "",
      new_password: "",
      confirm_new_password: "",
    };

    this.onChange = this.handleUpdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  handleUpdate = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      password: this.state.old_password,
      new_password: this.state.confirm_new_password
    }

    if (this.state.new_password == this.state.confirm_new_password) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/update_password`, data)
        .then((resp) => {
          swal(resp.data.message);
        }).catch((e) => {   
          swal(e.response.data.message);
        })
    } else {
      swal("passwords do not match please rectify");
    }
  };

  render() {
    return (
      <div className="flex-row-fluid ml-lg-8">
        {/*begin::Content*/}
        {/*begin::Form*/}
        <form className="form" onSubmit={this.onSubmit}>
          {/*begin::Card*/}
          <div className="card card-custom">
            {/*begin::Header*/}
            <div className="card-header py-3">
              <div className="card-title align-items-start flex-column">
                <h3 className="card-label font-weight-bolder text-dark">
                  Update Password
                </h3>
                <span className="text-muted font-weight-bold font-size-sm mt-1">
                  Update your account password
                </span>
              </div>
              <div className="card-toolbar">
                
                <button type="submit" className="btn btn-success mr-2">
                  Save Changes
                </button>
                <button type="reset" className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </div>
            {/*end::Header*/}
            <div className="card-body">
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-alert">
                  Current Password
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    type="password"
                    name="old_password"
                    className="form-control form-control-lg form-control-solid mb-2"
                    placeholder="Current password"
                    onChange={this.handleUpdate}
                  />
                  {/* <a
                    href="/auth/forgot-password"
                    className="text-sm font-weight-bold"
                  >
                    Forgot password?
                  </a> */}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-alert">
                  New Password
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    type="password"
                    name="new_password"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="New password"
                    onChange={this.handleUpdate}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-alert">
                  Confirm Password
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    type="password"
                    name="confirm_new_password"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="Confirm password"
                    onChange={this.handleUpdate}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*end::Content*/}
        </form>
        {/*end::Form*/}
      </div>
    );
  }
}

export default Update_password;
