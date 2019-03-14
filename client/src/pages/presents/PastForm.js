import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputGroup from "../../components/common/InputGroup";
import { addPast } from "../../actions/pastActions";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class PastForm extends Component {
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

    const { user } = this.props.auth;

    const newPast = {
      name: this.state.name,
      date: this.state.date,
      image: this.state.image
    };

    this.props.addPast(newPast);
    this.setState({
      name: "",
      date: moment(),
      image: ""
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
                placeholder="name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                error={errors.name}
              />
              <DatePicker
                selected={this.state.date}
                onSelect={this.handleSelect}
              />
              <InputGroup
                placeholder="image"
                name="image"
                value={this.state.image}
                onChange={this.onChange}
                error={errors.image}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Add Past
            </button>
          </form>
        </div>
      </div>
    );

    return <div className="add-section">{hidden ? addButton : addForm}</div>;
  }
}

PastForm.propTypes = {
  addPast: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPast }
)(PastForm);
