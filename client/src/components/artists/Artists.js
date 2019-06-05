import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
    const index = this.state.currentArtistIndex;
    let artistContent;
    if (artists === null) {
      artistContent = "artists";
    } else {
      const CurrentName = artists.length && artists[index].name;
      const CurrentBio = artists.length && artists[index].bio;
      const CurrentImage = artists.length && artists[index].image;
      const CurrentInstagram = artists.length && artists[index].instagram;
      const CurrentID = artists.length && artists[index]._id;
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
                <TransitionGroup>
                  <CSSTransition
                    key={CurrentID}
                    timeout={200}
                    classNames="fade"
                  >
                    <div className="artist--card">
                      <div className="artist--image__container">
                        <a
                          href={CurrentInstagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="artist--image"
                            src={CurrentImage}
                            alt={CurrentName}
                          />
                        </a>
                        <div className="artist--info">
                          <div className="artist--bio">
                            <p className="artist--bio_p">{CurrentBio}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CSSTransition>
                </TransitionGroup>{" "}
              </div>
              <div className="artists--sublinks">
                {artists.map((artist, index) => {
                  return (
                    <React.Fragment>
                      <div
                        key={index}
                        className={
                          this.state.currentArtistIndex === index
                            ? "artists--sublinks__link sublink active-link"
                            : "artists--sublinks__link sublink"
                        }
                        onClick={() => this.changeArtist(index)}
                      >
                        {artist.name}
                      </div>

                      <br />
                    </React.Fragment>
                  );
                })}
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
