import React from 'react';

import './card.css';

const Card = ({content}) => {

  const boldDigit = (str) => {
    //make the word bold if it is a digit
    const words = str.split(' ');
    let newWords = [];

    for (let [index, value] of words.entries()) {
      //add space to all words except the last
      let newValue = index === words.length - 1 ? value : `${value} `;

      if (Number.isInteger(parseInt(newValue))) {
        newWords.push(<b>{newValue}</b>);
      } else {
        newWords.push(newValue);
      }
    }
    return newWords
  }

  const isDisabled = content.status === 'disabled' ? 'disabled' : null
  const isSelectedHover = content.status === 'selectedHover' ? 'selectedHover' : null

  return (
    <React.Fragment>
      <p className={`card-title grey ${isDisabled} ${isSelectedHover}`}>
        {isSelectedHover ? 'Котэ не одобряет?': content.title}
      </p>
      <h2 className={`card-headline black ${isDisabled}`}>{content.headline}</h2>
      <p className={`card-sub-headline black ${isDisabled}`}>{content.subHeadline}</p>
      <p className={`card-description grey ${isDisabled}`}>{boldDigit(content.description)}</p>
      <div className={`card-value background-blue ${isDisabled}`}>
        <p className="card-value-number white">{content.value.number}</p>
        <p className="card-value-unit white">{content.value.unit}</p>
      </div>

    </React.Fragment>
  )
}

export default Card;