import React, { Component } from "react";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import axios from "axios";
import swal from "sweetalert";

export class Personal_information extends Component {
  state = {
    me: "",
    firstname: "",
    lastname: "",
    phone: "",
  };

  componentDidMount() {
    this.get_data();
  }

  get_data = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/me`);
    this.setState({
      me: res.data.data,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let firstname = this.state.firstname;
    if (firstname == "") {
      firstname = this.state.me.firstname;
    }
    let lastname = this.state.lastname;
    if (lastname == "") {
      lastname = this.state.me.lastname;
    }
    let phone = this.state.phone;
    if (phone == "") {
      phone = this.state.me.phone;
    }
    const data = {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
    };

    axios
      .patch(`${process.env.REACT_APP_BASE_URL}/update_user`, data)
      .then((res) => {
        swal(res.data.message);
      });
  };

  render() {
    const me = this.state.me;

    return (
      <div className="flex-row-fluid ml-lg-8">
        {/*begin::Content*/}
        {/*begin::Form*/}
        <form onSubmit={this.onSubmit} style={{ left: "auto" }}>
          {/*begin::Card*/}
          <div className="card card-custom card-stretch">
            {/*begin::Header*/}
            <div className="card-header py-3">
              <div className="card-title align-items-start flex-column">
                <h3 className="card-label font-weight-bolder text-dark">
                  Personal Information
                </h3>
                <span className="text-muted font-weight-bold font-size-sm mt-1">
                  Update your personal information
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

            {/*begin::Body*/}

            <div className="card-body">
              <div className="row">
                <label className="col-xl-3" />
                <div className="col-lg-9 col-xl-6">
                  <h5 className="font-weight-bold mb-6">My Info</h5>
                </div>
              </div>
              
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  First Name
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    name="firstname"
                    defaultValue={me.firstname}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Last Name
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    name="lastname"
                    defaultValue={me.lastname}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {me ? (
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label text-right">
                    Role
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <input
                      className="form-control form-control-lg form-control-solid"
                      type="text"
                      defaultValue={
                        me.is_audit === "true"
                          ? "Auditor"
                          : me.is_admin == "true"
                          ? "Administrator"
                          : me.is_sales_rep == "true"
                          ? "Sales Representative"
                          : "Super Administrator"
                      }
                      disabled
                    />
                  </div>
                </div>
              ) : (
                <div className=""></div>
              )}

              <div className="row">
                <label className="col-xl-3" />
                <div className="col-lg-9 col-xl-6">
                  <h5 className="font-weight-bold mt-10 mb-6">Contact Info</h5>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Contact Phone
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="input-group input-group-lg input-group-solid">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-phone" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      defaultValue={me.phone}
                      placeholder="Phone"
                      name="phone"
                      onChange={this.handleChange}
                    />
                  </div>
                  <span className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </span>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Email Address
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="input-group input-group-lg input-group-solid">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-at" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      defaultValue={me.email}
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*end::Body*/}
          </div>
        </form>
        {/*end::Form*/}
        {/*end::Content*/}
        {/*end::Profile Personal Information*/}
        {/*end::Container*/}
        {/*end::Entry*/}
        {/*end::Content*/}
      </div>
    );
  }
}

export default Personal_information;
