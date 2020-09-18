import React, {Component} from 'react';

import './card-container.css';
import frameDefault from './img/frame-default.svg';
import frameDefaultHover from './img/frame-default-hover.svg';
import frameSelected from './img/frame-selected.svg';
import frameSelectedHover from './img/frame-selected-hover.svg';
import frameDisabled from './img/frame-disabled.svg';
import cat from './img/background-cat.png';
import catDisabled from './img/background-cat-disabled.png';
import cardBackground from './img/card-background.svg';

import Card from '../card';

class CardContainer extends Component {

  state = {
    noHover: false
  }

  //background style combination
  render() {
    const { content, onToggleSelection, onToggleHover } = this.props;

    const backgroundLink = {
      frameDefault: `url(${frameDefault})`,
      frameDefaultHover: `url(${frameDefaultHover})`,
      frameSelected: `url(${frameSelected})`,
      frameSelectedHover: `url(${frameSelectedHover})`,
      frameDisabled: `url(${frameDisabled})`,
      cat: `no-repeat url(${cat}) 0% 100%`,
      catDisabled: `no-repeat url(${catDisabled}) 0% 100%`,
      solidGrey: `url(${cardBackground})`
    }

    let background = [backgroundLink.cat, backgroundLink.solidGrey]

    switch (content.status) {
      case "default":
        if (content.hover) {
          background.unshift(backgroundLink.frameDefaultHover);
        } else {
          background.unshift(backgroundLink.frameDefault);
        }
        break;
      case "selected":
        if (content.hover) {
          background.unshift(backgroundLink.frameSelectedHover);
        } else {
          background.unshift(backgroundLink.frameSelected);
        }
        break;
      case "disabled":
        background.splice(0, 1, backgroundLink.catDisabled);
        background.unshift(backgroundLink.frameDisabled);
        break;
      default:
        background.unshift(backgroundLink.frameDefault);
        break;
    }

    const style = {
      background: background
    }

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
          style={style}
          className={`card-container ${this.state.noHover ? "no-hover" : ""}`}
          onClick={() => {onSelect()} }
          onMouseEnter={onToggleHover}
          onMouseLeave={this.state.noHover ? onMouseLeave : onToggleHover}
        >
          <Card content={content} noHover={this.state.noHover}/>
        </div>
      )
    } else {
        return (
          <div style={style} className="card-container">
            <Card content={content}/>
          </div>
        )
      }
  }
}

export default CardContainer;