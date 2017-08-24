import React, { Component} from 'react';

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
        <input type="text" onChange={(event)} value={this.state.username}></input>
        <input type="text" onChange={(event)} value={this.state.artist}></input>
        <input type="text" onChange={(event)} value={this.state.title}></input>
        <textarea onChange={(event) => this.onChangeHandler('notes', event.target.value)}>
          {this.state.notes}
        </textarea>
        <button type="submit">ADD SONG!</button>
      </form>
    )
  }
}

export default Form
