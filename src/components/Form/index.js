import React, { Component} from 'react';

class Form extends Component {

  render(){
    return (
      <form>
        <input type="text" onChange={} value={username}></input>
        <input type="text" onChange={} value={artist}></input>
        <input type="text" onChange={} value={title}></input>
        <textarea onChange={} >
          {notes}
        </textarea>
        <button type="submit">ADD SONG!</button>
      </form>
    )
  }
}
