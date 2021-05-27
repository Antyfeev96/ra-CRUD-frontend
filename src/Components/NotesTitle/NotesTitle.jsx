import './NotesTitle.scss';
import { Component } from 'react'
import Button from '../Button/Button'
import API from '../API/API';

export default class NotesTitle extends Component {
  constructor(props) {
    super(props)
    this.api = new API();
  }

  render() {
    return (
      <div className="notes__title">
        <span>Notes</span>
        <Button icon={'faSync'} handler={this.props.updateState} />
      </div>
    )
  }
}