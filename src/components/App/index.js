// Dependencies
import React, { Component } from 'react';
import map from 'lodash/map';
// Externals
import Form from '../Form';
import Playlist from '../Playlist';
import Navbar from '../Navbar';
// Internals
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    // Fetch songs with the API.
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
      .then((res) => res.json())
      .then((dirtySongs) => {
        const songs = map(dirtySongs, (dirtySong) => ({
          username: dirtySong.userName,
          title: dirtySong.songTitle,
          artist: dirtySong.songArtist,
          notes: dirtySong.songNotes,
        }));
        this.setState({ songs });
      });
  }

  addSong = (song) => {
    // Update our state with the new song.
    const { songs } = this.state;
    songs.push(song);
    this.setState({ songs });
    // Send the API our new song.
    this.addSongToApi(song);
  }

  addSongToApi = (song) => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        userName: song.username,
        songTitle: song.title,
        songArtist: song.artist,
        songNotes: song.notes,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", options)
      .then(res => {
        console.log('Created song successfully:', res);
      })
      .catch(err => {
        console.error('Unable to create song:', err);
      });
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="content">
          <Form addSong={this.addSong} />
          <Playlist songs={this.state.songs} />
        </div>
      </div>
    );
  }
}

export default App;
