import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import './index.css';

const INITIAL_STATE = {
  username: '',
  artist: '',
  title: '',
  notes: '',
};


class Form extends Component {
  static propTypes = {
    addSong: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  onChangeHandler = (key, value) => {
    this.setState({ [key]: value });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    // Add the song (meaning our state) to the App's state (songs).
    this.props.addSong(this.state);
    // Clear our form
    this.setState(INITIAL_STATE);
  }

  render() {
    return (
      <div className="add-song-form">
        <h2 />
        <form onSubmit={this.onSubmitHandler}>
          {/* Username */}
          <Field
            label="Username"
            onChange={(event) => this.onChangeHandler('username', event.target.value)}
            value={this.state.username}
          />
          {/* Artist */}
          <Field
            label="Artist"
            onChange={(event) => this.onChangeHandler('artist', event.target.value)}
            value={this.state.artist}
          />
          {/* Title */}
          <Field
            label="Title"
            onChange={(event) => this.onChangeHandler('title', event.target.value)}
            value={this.state.title}
          />
          {/* Notes */}
          <Field
            label="Notes"
            onChange={(event) => this.onChangeHandler('notes', event.target.value)}
            value={this.state.notes}
            fieldType="textarea"
          />
          {/* Submit */}
          <button type="submit">Add Song!</button>
        </form>
      </div>
    );
  }
}

export default Form;
