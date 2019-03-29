import React from "react";

import TemplateHiddenCard from "./TemplateHiddenCard";

import "../styles/CardsListToChoose.css";

const CardsListToChoose = props => {
  return (
    <div className="cards_list">
      {props.randomPlayers.length > 0 &&
        props.randomPlayers.map(player => (
          <TemplateHiddenCard
            key={player.id}
            player={player}
            isCardActive={props.isCardActive}
          />
        ))}
    </div>
  );
};

export default CardsListToChoose;
