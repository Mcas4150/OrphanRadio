// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import FKL from "../../img/FKL.jpg";
// import { getArtists } from "../../actions/artistActions";
// import "./Artists.css";

// class Artists extends Component {
//   componentWillMount() {
//     this.props.getArtists();
//   }

//   render() {
//     const { artists } = this.props.artist;
//     let artistContent;
//     if (artists === null) {
//       artistContent = "artists";
//     } else {
//       // artistContent = artists[0].name;
//       artistContent = artists.map(artist => {
//         const name = artist.name;
//         const bio = artist.bio;
//         const website = artist.website;
//         const instagram = artist.instagram;
//         const twitter = artist.twitter;

//         return (
//           <React.Fragment>
//             <div className="artist--card">
//               <div className="artist--name">{name} </div>
//               <div className="artist--info">
//                 <div className="artist--bio">
//                   <h3>Bio</h3>
//                   <p className="artist--bio_p">{bio}</p>
//                 </div>
//                 <div className="artist--links">
//                   <h3>Links</h3>
//                   <a
//                     className="artist--sublinks"
//                     href={artist.instagram}
//                     target="_blank"
//                   >
//                     Instagram
//                   </a>
//                   <br />
//                   <a
//                     className="artist--sublinks"
//                     href={artist.twitter}
//                     target="_blank"
//                   >
//                     Twitter
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <hr />
//           </React.Fragment>
//         );
//       });
//     }

//     return <div className="records-page--artists">{artistContent}</div>;
//   }
// }

// Artists.propTypes = {
//   getArtists: PropTypes.func.isRequired,
//   artist: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   artist: state.artist
// });

// export default connect(
//   mapStateToProps,
//   { getArtists }
// )(Artists);
