import React from 'react';

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

const CardContainer = ({content}) => {
  //background style combination
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
      background.unshift(backgroundLink.frameDefault);
      break;
    case "defaultHover":
      background.unshift(backgroundLink.frameDefaultHover);
      break;
    case "selected":
      background.unshift(backgroundLink.frameSelected);
      break;
    case "selectedHover":
      background.unshift(backgroundLink.frameSelectedHover);
      break;
    case "disabled":
      background.splice(0, 1, backgroundLink.catDisabled);
      background.unshift(backgroundLink.frameDisabled);
      break;
    default:
      break
  }

  const style = {
    background: background
  }

  return (
    <div className="card-container" style={style}>
      <Card content={content}/>
    </div>
  )
}

export default CardContainer;