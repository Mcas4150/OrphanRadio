import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputGroup from "../../components/common/InputGroup";
import { addUpcoming } from "../../actions/upcomingActions";

class UpcomingForm extends Component {
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

    const newUpcoming = {
      name: this.state.name,
      date: this.state.date,
      image: this.state.image,
      tickets: this.state.ticekts
    };

    this.props.addUpcoming(newUpcoming);
    this.setState({
      name: "",
      date: "",
      image: "",
      tickets: ""
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
                placeholder="date"
                name="date"
                value={this.state.date}
                onChange={this.onChange}
                error={errors.date}
              />
              <InputGroup
                placeholder="image"
                name="image"
                value={this.state.image}
                onChange={this.onChange}
                error={errors.image}
              />
              <InputGroup
                placeholder="tickets"
                name="tickets"
                value={this.state.tickets}
                onChange={this.onChange}
                error={errors.tickets}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Add Artist
            </button>
          </form>
        </div>
      </div>
    );

    return <div className="add-section">{hidden ? addButton : addForm}</div>;
  }
}

UpcomingForm.propTypes = {
  addUpcoming: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addUpcoming }
)(UpcomingForm);
