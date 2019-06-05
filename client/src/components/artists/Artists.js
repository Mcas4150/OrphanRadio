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
                        Orphan. in 2015 with friends Sage Redman and Billy
                        Meddleton. The three began throwing bi-monthly parties
                        in Deptford; their aim was to feature the unsung heroes,
                        the seminal artists that weren’t often regulars in the
                        crowded London club circuit. Come 2017 the trio found
                        themselves divided by an ocean - Joe and Sage forced to
                        relocate in Seattle after her visa expiration, and Billy
                        to Berlin. Despite the distance, Orphan. carried on with
                        events in each location (hosting the likes of DJ Python,
                        Equiknoxx, DEBIT, Lapalux, Sylvere and many more) and
                        launched Orphan. Radio in Seattle as an ode to the
                        London stations they'd come to miss. Orphan. Radio's
                        focus was to showcase local artists and DJs,
                        highlighting the diverse music community in Seattle, as
                        well as feature touring national and international
                        artists with their own distinctive flare. Guests
                        included Shanti Celeste, Octo Octa, DJ Manny & DJ Taye,
                        Moodhuts’ Neo Image & Local Artist and many more. After
                        two solid years on air the station closed its doors to
                        make way for a new chapter in the Orphan. storybook.
                        Orphan. now operates out of New York and Berlin.{" "}
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
