import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputGroup from "../common/InputGroup";
import { addArchive } from "../../actions/archiveActions";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class ArchiveForm extends Component {
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

    const newArchive = {
      name: this.state.name,
      date: this.state.date,
      mix: this.state.mix,
      tracklist: this.state.tracklist
    };

    this.props.addArchive(newArchive);
    this.setState({
      name: "",
      date: moment(),
      mix: "",
      tracklist: ""
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
                placeholder="date"
                selected={this.state.date}
                onSelect={this.handleSelect}
              />
              <InputGroup
                placeholder="mix"
                name="mix"
                value={this.state.mix}
                onChange={this.onChange}
                error={errors.mix}
              />
              <InputGroup
                placeholder="tracklist"
                name="tracklist"
                value={this.state.tracklist}
                onChange={this.onChange}
                error={errors.tracklist}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Add Archive
            </button>
          </form>
        </div>
      </div>
    );

    return <div className="add-section">{hidden ? addButton : addForm}</div>;
  }
}

ArchiveForm.propTypes = {
  addArchive: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addArchive }
)(ArchiveForm);
