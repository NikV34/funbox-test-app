import React from 'react';

import './card-list.css';
import CardContainer from '../card-container';
import BuyButton from '../buy-button';

const CardList = ({ cards, onToggleSelection, onToggleHover }) => {

  const renderItems = (items) => {
    return items.map((card, index) => {
      return (
        <div className="card-wrapper" key={index}>
          <CardContainer content={card}
                         onToggleSelection={() => onToggleSelection(index)}
                         onToggleHover={() => onToggleHover(index)} />
          <BuyButton content={card}
                     onToggleSelection={() => onToggleSelection(index)}
                     />
        </div>
      )
    })
  }

  return (
    <div className="card-list">
      {renderItems(cards)}
    </div>
  )
}

export default CardList;