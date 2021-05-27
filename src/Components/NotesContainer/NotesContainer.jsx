import './NotesContainer.scss';
import React, { Component } from 'react'
import Note from '../Note/Note';

export default class NotesContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="notes__container">
        {this.props.notes.map((note) => <Note deleteNote={() => this.props.deleteNote(note.id)} {...note} />)}
      </div>
    )
  }
}
