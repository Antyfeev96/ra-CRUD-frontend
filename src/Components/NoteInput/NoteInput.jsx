import './NoteInput.scss';
import React, { Component } from 'react'
import Button from '../Button/Button';
import { nanoid } from 'nanoid';

export default class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.textRef = React.createRef()
  }


  onChange(e) {
    this.setState((prev) => ({
      value: e.target.value
    }))
  }

  render() {
    return (
      <div className="notes__input">
        <div>New Note</div>
        <textarea ref={this.textRef} value={this.state.value} onChange={this.onChange.bind(this)} type="text" name="note" />
        <Button icon={'faPaperPlane'} handler={() => this.props.addNote({
          key: nanoid(5),
          content: this.state.value
        })} />
      </div>
    )
  }
}
