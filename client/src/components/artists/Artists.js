import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { getArtists } from "../../actions/artistActions";
import "./Artists.css";

class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appearCard: false,
      currentArtistIndex: 0
    };
    this.changeArtist = this.changeArtist.bind(this);
  }

  componentWillMount() {
    this.props.getArtists();
  }

  componentDidMount() {
    this.toggleAppear();
  }

  toggleAppear = () => {
    this.setState({
      appearCard: !this.state.appearCard
    });
  };

  changeArtist(index) {
    this.setState({
      currentArtistIndex: index
    });
  }

  render() {
    const { artists } = this.props.artist;
    const { appearCard } = this.state;

    let artistContent;
    if (artists === null) {
      artistContent = "artists";
    } else {
      return (
        <CSSTransition
          in={appearCard}
          appear={true}
          timeout={300}
          classNames="fade"
        >
          <div className="records-page--artists">
            <div className="artists--container">
              <div className="card--container">
                <div className="artist--card">
                  <div className="artist--info">
                    <div className="artist--bio">
                      <p className="artist--bio_p">
                        Retail
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      );
    }
    return { artistContent };
  }
}

Artists.propTypes = {
  getArtists: PropTypes.func.isRequired,
  artist: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  artist: state.artist
});

export default connect(
  mapStateToProps,
  { getArtists }
)(Artists);
