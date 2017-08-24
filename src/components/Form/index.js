import React, { Component} from 'react';
import Field from '../Field';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      artist: '',
      title: '',
      notes: '',
    };
  }

  onChangeHandler = (key, value) => {
    this.setState({[key]: value});
  }

  render(){
    return (
      <form>
        <Field
          label="Username"
          onChange={(event) => this.onChangeHandler('username', event.target.value)}
          value={this.state.username}
          />
        <Field
          label="Artist"
          onChange={(event) => this.onChangeHandler('artist', event.target.value)}
          value={this.state.username}
          />
        <Field
          label="Title"
          onChange={(event) => this.onChangeHandler('title', event.target.value)}
          value={this.state.username}
          />
        <Field
          label="Notes"
          onChange={(event) => this.onChangeHandler('notes', event.target.value)}
          value={this.state.username}
          fieldType="textarea"
          />
        <button type="submit">ADD SONG!</button>
      </form>
    )
  }
}

export default Form
