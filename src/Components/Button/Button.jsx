import './Button.scss';
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.fa = fas[this.props.icon];
    this.handler = this.props.handler
  }

  render() {
    return (
      <div className="button">
        <FontAwesomeIcon icon={this.fa} onClick={this.handler}/>
      </div>
    )
  }
}
