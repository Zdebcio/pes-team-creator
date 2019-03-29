import React from "react";

import TemplateUserCard from "./TemplateUserCard";
import "../styles/ActualUserCards.css";

const ActualUserCards = props => {
  return (
    <div className="cards_list">
      {props.activeUser[props.index].cards.map(card => (
        <TemplateUserCard key={card.id} player={card} />
      ))}
    </div>
  );
};

export default ActualUserCards;
