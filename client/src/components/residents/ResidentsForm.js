import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputGroup from "../common/InputGroup";
import { addResident } from "../../actions/residentActions";

class ResidentForm extends Component {
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
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newResident = {
      name: this.state.name,
      bio: this.state.bio,
      image: this.state.image,
      mix: this.state.mix
    };

    this.props.addResident(newResident);
    this.setState({
      name: "",
      bio: "",
      image: "",
      mix: ""
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
              <InputGroup
                placeholder="bio"
                name="bio"
                value={this.state.bio}
                onChange={this.onChange}
                error={errors.bio}
              />
              <InputGroup
                placeholder="image"
                name="image"
                value={this.state.image}
                onChange={this.onChange}
                error={errors.image}
              />
              <InputGroup
                placeholder="mix"
                name="mix"
                value={this.state.mix}
                onChange={this.onChange}
                error={errors.mix}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Add Resident
            </button>
          </form>
        </div>
      </div>
    );

    return <div className="add-section">{hidden ? addButton : addForm}</div>;
  }
}

ResidentForm.propTypes = {
  addResident: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addResident }
)(ResidentForm);
