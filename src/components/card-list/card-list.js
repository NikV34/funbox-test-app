import React from 'react';

import './card-list.css';
import CardContainer from '../card-container';
import BuyButton from '../buy-button';

const CardList = ({ cards }) => {

  const renderItems = (items) => {
    return items.map((card) => {
      return (
        <div className="card-wrapper">
          <CardContainer content={card}/>
          <BuyButton content={card}/>
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