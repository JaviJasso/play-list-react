//Dependecies
import React, { Component } from 'react';
//Externals
//Internals
import Navbar from '../Navbar';
import From from '../Form';
import Playlist from '../Playlist';
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  addSong = (song) => {
    const {songs} = this.state;
    songs.push(song);
    this.setState({songs});
  };

  render() {
    return (
      <div className="app">
        <Navbar />
        <From />
        <Playlist songs={this.state.songs}/>
      </div>
    );
  }
}

export default App;
