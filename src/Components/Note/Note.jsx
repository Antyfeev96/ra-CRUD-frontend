import './Note.scss';
import React, { Component } from 'react'
import Button from '../Button/Button';

export default class Note extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note">
        <Button icon={'faTimes'} handler={this.props.deleteNote} />
        <div className="note__text">
          {this.props.content}
        </div>
      </div>
    )
  }
}
