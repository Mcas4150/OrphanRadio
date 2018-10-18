import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputGroup from "../common/InputGroup";
import { addArtist } from "../../actions/artistActions";

class ArtistForm extends Component {
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

    // const { user } = this.props.auth;

    const newArtist = {
      name: this.state.name,
      bio: this.state.bio,
      website: this.state.website,
      instagram: this.state.instagram,
      twitter: this.state.twitter
    };

    this.props.addArtist(newArtist);
    this.setState({
      name: "",
      bio: "",
      website: "",
      instagram: "",
      twitter: ""
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
                placeholder="website"
                name="website"
                value={this.state.website}
                onChange={this.onChange}
                error={errors.website}
              />
              <InputGroup
                placeholder="instagram"
                name="instagram"
                value={this.state.instagram}
                onChange={this.onChange}
                error={errors.instagram}
              />
              <InputGroup
                placeholder="twitter"
                name="twitter"
                value={this.state.twitter}
                onChange={this.onChange}
                error={errors.twitter}
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

ArtistForm.propTypes = {
  addArtist: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addArtist }
)(ArtistForm);
