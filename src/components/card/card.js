import React from 'react';

import './card.css';

const boldDigit = (str) => {
  //make the word bold if it is a digit
  const words = str.split(' ');
  let newWords = [];

  for (let [index, value] of words.entries()) {
    //add space to all words except the last
    let newValue = index === words.length - 1 ? value : `${value} `;

    if (Number.isInteger(parseInt(newValue))) {
      newWords.push(<b key={index}>{newValue}</b>);
    } else {
      newWords.push(newValue);
    }
  }
  return newWords
}

const renderDescriptionItems = (description, classname) => {
  if (description) {
    let descriptionArray = [];
    for (let key in description) {
      if (description.hasOwnProperty(key)) {
        descriptionArray.push(<p className={classname}>{boldDigit(description[key])}</p>);
      }
    }
    return descriptionArray;
  }
}

const Card = ({content, noHover}) => {

  const isDisabled = content.status === 'disabled' ? 'disabled' : ""
  const isDefaultHover = content.status === 'default' && content.hover ? 'default-hover' : ""
  const isSelected = content.status === 'selected' ? 'selected' : ""
  const isSelectedHover = content.status === 'selected' && content.hover ? 'selected-hover' : ""

  return (
    <React.Fragment>
      <p className={`card-title grey ${isDisabled} ${isSelectedHover}`}>
        {isSelectedHover && !noHover ? 'Котэ не одобряет?' : content.title }
      </p>
      <h2 className={`card-headline black ${isDisabled}`}>{content.headline}</h2>
      <p className={`card-sub-headline black ${isDisabled}`}>{content.subHeadline}</p>
      {renderDescriptionItems(content.description, `card-description grey ${isDisabled}`)}
      <div className={`card-value background-blue ${isDisabled} ${isSelected} ${isSelectedHover} ${isDefaultHover}`}>
        <p className="card-value-number white">{content.value.number}</p>
        <p className="card-value-unit white">{content.value.unit}</p>
      </div>

    </React.Fragment>
  )
}

export default Card;