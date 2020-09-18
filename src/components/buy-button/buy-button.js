import React from 'react';

import './buy-button.css';

const BuyButton = ({content, onToggleSelection, onToggleHover}) => {
  switch (content.status) {
    case "default":
      const divClass = content.hover ? "default-hover" : "default";
      return (
        <div className={`buy-button white ${divClass}`}>{"Чего сидишь? Порадуй котэ, "}
          <a href="#"
             className="buy-btn"
             id="buy-btn"
             onClick={onToggleSelection}
             onMouseEnter={onToggleHover}
             onMouseLeave={onToggleHover} >
            <b>купи</b>
          </a>
        </div>
      )
    case 'selected':
      return <div className="buy-button white">{content.additionalDescription}</div>
    case 'disabled':
      return <div className="buy-button yellow">{`Печалька, ${content.subHeadline} закончился.`}</div>
    default:
      return <div>Error</div>
  }

}

export default BuyButton;