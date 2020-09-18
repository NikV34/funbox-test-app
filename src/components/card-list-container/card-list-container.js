import React, {Component} from "react";

import './card-list-container.css';
import CardList from '../card-list';

class CardListContainer extends Component {
  state = {
    cards:
      [
        {
          title: "Сказочное заморское яство",
          headline: "Нямушка",
          subHeadline: "с фуа-гра",
          description: "10 порций мышь в подарок",
          additionalDescription: "Печень утки разварная с артишоками.",
          value: {
            number: "0,5",
            unit: "кг"
          },
          status: "defaultHover"
        },
        {
          title: "Сказочное заморское яство",
          headline: "Нямушка",
          subHeadline: "с рыбой",
          description: "40 порций 2 мыши в подарок",
          additionalDescription: "Головы щучьи с чесноком да свежайшая сёмгушка.",
          value: {
            number: "2",
            unit: "кг"
          },
          status: "default"
        },
        {
          title: "Сказочное заморское яство",
          headline: "Нямушка",
          subHeadline: "с курой",
          description: "100 порций 5 мышей в подарок заказчик доволен",
          additionalDescription: "Филе из цыплят с трюфелями в бульоне.",
          value: {
            number: "5",
            unit: "кг"
          },
          status: "disabled"
        }
      ]
  }

  render() {
    return (
      <div className="card-list-container">
        <CardList cards={this.state.cards}/>
      </div>
    )
  }
}

export default CardListContainer;