import React from "react";

import "../styles/TemplateHiddenCard.css";

const TemplateHiddenCard = props => {
  return (
    <>
      <div
        className={props.player.isActive ? "card active" : "card"}
        onClick={() => props.isCardActive(props.player.id)}
      >
        <img src="images/cardTemplateHide.png" alt="" />
      </div>
    </>
  );
};

export default TemplateHiddenCard;
