import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';



const Playlist = (props) => (
  <div className="playlist">
    {map(props.songs, (song) => (
      <div className="song">
        <p>Title:{song.title}</p>
        <p>Artist:{song.artist}</p>
        <p>Username:{song.username}</p>
        <p>Notes:{song.notes}</p>
      </div>
    ))}
  </div>
);

Playlist.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Playlist
