import React from "react";
import PlayerPreferPositions from "./PlayerPreferPositions";

import "../styles/TemplateSelectedCard.css";
import "../styles/TemplateUserCard.css";

const TemplateUserCard = props => {
  return (
    <div className="actual_card">
      <img className="card_background" src="images/cardTemplate.png" alt="" />
      <img
        className="face"
        src={props.player.face ? props.player.face : "images/faces/no-face.png"}
        alt=""
      />
      <img className="club" src={props.player.club} alt="" />
      <img className="country" src={props.player.country} alt="" />
      <span className="hisPosition">{props.player.hisPosition}</span>
      <h3>{props.player.name}</h3>
      <span className="ovr">{props.player.ovr}</span>
      <PlayerPreferPositions position={props.player.position} />
    </div>
  );
};

export default TemplateUserCard;
