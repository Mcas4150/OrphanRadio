import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputGroup from "../common/InputGroup";
import { addRelease } from "../../actions/releaseActions";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class ReleaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      text: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();



    const newRelease = {
      artist: this.state.artist,
      title: this.state.title,
      image: this.state.image,
      listenLink: this.state.listenLink,
      color: this.state.color,
      catalog: this.state.catalog,
      buyLink: this.state.buyLink,
      date: this.state.date
    };

    this.props.addRelease(newRelease);
    this.setState({
      artist: "",
      title: "",
      image: "",
      listenLink: "",
      color: "",
      catalog: "",
      buyLink: "",
      date: moment()
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(e) {
    this.setState({
      hidden: false
    });
  }

  handleSelect(date) {
    this.setState({ date: date });
  }

  render() {
    const { errors, hidden } = this.state;

    const addButton = (
      <div className="add-button" onClick={this.onClick}>
        <i id="icon" class="fa fa-plus" />
      </div>
    );

    const addForm = (
      <div className="add-form">
        <div className="card-dull">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <InputGroup
                placeholder="artist"
                name="artist"
                value={this.state.artist}
                onChange={this.onChange}
                error={errors.artist}
              />
              <InputGroup
                placeholder="title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                error={errors.title}
              />
              <InputGroup
                placeholder="image"
                name="image"
                value={this.state.image}
                onChange={this.onChange}
                error={errors.image}
              />
              <InputGroup
                placeholder="listenLink"
                name="listenLink"
                value={this.state.listenLink}
                onChange={this.onChange}
                error={errors.listenLink}
              />
              <InputGroup
                placeholder="catalog"
                name="catalog"
                value={this.state.catalog}
                onChange={this.onChange}
                error={errors.catalog}
              />
              <InputGroup
                placeholder="buyLink"
                name="buyLink"
                value={this.state.buyLink}
                onChange={this.onChange}
                error={errors.buyLink}
              />
              <DatePicker
                placeholder="date"
                selected={this.state.date}
                onSelect={this.handleSelect}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Add Release
            </button>
          </form>
        </div>
      </div>
    );

    return <div className="add-section">{hidden ? addButton : addForm}</div>;
  }
}

ReleaseForm.propTypes = {
  addRelease: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addRelease }
)(ReleaseForm);
