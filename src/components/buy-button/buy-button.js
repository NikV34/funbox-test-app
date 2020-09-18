import React from 'react';

import './buy-button.css';

const BuyButton = ({content}) => {
  switch (content.status) {
    case "default":
    case "defaultHover":
      const divClass = content.status === "default" ? "default" : "default-hover";
      return (
        <div className={`buy-button white ${divClass}`}>{"Чего сидишь? Порадуй котэ, "}
          <a href="#" className="buy-btn" id="buy-btn">
            <b>купи</b>
          </a>
        </div>
      )
    case 'selected':
      return <div className="buy-button white">{content.additionalDescription}</div>
    case 'disabled':
      return <div className="buy-button yellow">{`Печалька, ${content.subHeadline} закончился.`}</div>
  }

}

export default BuyButton;