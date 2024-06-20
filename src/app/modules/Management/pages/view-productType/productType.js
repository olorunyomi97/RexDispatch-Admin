import React, { Component } from "react";
import axios from "axios";
import { WithContext as ReactTags } from "react-tag-input";
import swal from "sweetalert";
// react tag styling
import "./style.css";

class ProductType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      product_type: "",
      loading: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  //   componentDidMount() {
  //     this.get_categories();
  //   }

  //   get_categories = async () => {
  //     const resp = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/categories`
  //     );

  //     this.setState({
  //       tags: resp.data.data,
  //     });
  //   };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //react tag props
  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    this.setState((state) => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  handleUpdate = () => {
    this.setState({
      loading: true,
    });

    const sub_features = [];

    this.state.tags.map((feature) => {
      sub_features.push(feature.text.toLocaleLowerCase());
    });

    const data = {
      name: this.state.product_type.toLocaleLowerCase(),
      sub_features: sub_features,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/create_product_type`, data)
      .then((resp) => {
        swal(resp.data.message);
      })
      .then(() => {
        document.getElementById("product_type").value = "";
        this.setState({
          tags: [],
          loading: false,
        });
      });
  };

  render() {
    const tags = this.state.tags;
    const loading = this.state.loading;
    return (
      <div>
        <div className="card card-custom">
          <div className="card-header flex-wrap border-0 pt-6 pb-0">
            <div className="card-title">
              <h3 className="card-label">New Product Type</h3>
            </div>
          </div>
          <div className="card-body">
            <div className="mt-5 mb-5 pb-5">
              <div className="form-group text-center row">
                <label className="col-xl-3 col-lg-3 col-form-label text-alert">
                  Product type
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    type="text"
                    id="product_type"
                    name="product_type"
                    className="form-control form-control-lg form-control-solid mb-2"
                    placeholder="Product type"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group  row">
                <label className="col-xl-3 col-lg-3 text-center col-form-label text-alert">
                  Other features
                </label>
                <div className="col-lg-9 col-xl-6">
                  <ReactTags
                    tags={tags}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    //   delimiters={delimiters}
                  />
                </div>

                <div className="col-9 ml-auto mt-5">
                  <button
                    className="btn btn-light-primary mt-lg-2"
                    onClick={this.handleUpdate}
                    disable={loading}
                  >
                    {loading && <i className="fa fa-spinner fa-spin "></i>}
                    {(loading && <span>Updating...</span>) || (
                      <span>Update</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductType;
