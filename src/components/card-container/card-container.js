import React, {Component} from 'react';

import './card-container.css';

import Card from '../card';
import Frame from '../frame';

class CardContainer extends Component {

  state = {
    noHover: false
  }

  render() {
    const { content, onToggleSelection, onToggleHover } = this.props;

    const onSelect = () => {
      onToggleSelection();
      if (content.hover) {
        onToggleHover()
      }
      this.setState({noHover: true})
    }

    const onMouseLeave = () => {
      this.setState({noHover: false})
    }

    if (content.status !== 'disabled') {
      return (
        <div
          className={`card-container ${this.state.noHover ? "no-hover" : ""}`}
          onClick={() => {onSelect()} }
          onMouseEnter={onToggleHover}
          onMouseLeave={this.state.noHover ? onMouseLeave : onToggleHover}>
            <Card content={content} noHover={this.state.noHover}/>
            <Frame status={content.status} hover={content.hover}/>
        </div>
      )
    } else {
        return (
          <div className="card-container">
            <Card content={content}/>
            <Frame status={content.status} hover={content.hover}/>
          </div>
        )
      }
  }
}

export default CardContainer;