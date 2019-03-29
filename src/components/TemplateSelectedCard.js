import React from "react";
import PlayerPreferPositions from "./PlayerPreferPositions";

import "../styles/TemplateSelectedCard.css";

const TemplateSelectedCard = props => {
  return (
    <div
      onClick={() => props.selectCard(props.player.id)}
      className={
        props.player.isSelected ? "actual_card active_card" : "actual_card"
      }
    >
      {props.isOpen ? (
        <>
          <img
            className="card_background"
            src="images/cardTemplate.png"
            alt=""
          />
          {props.player.isSelected && (
            <div className="active_symbol">
              <i class="fab fa-get-pocket" />
            </div>
          )}
          <img
            className="face"
            src={
              props.player.face ? props.player.face : "images/faces/no-face.png"
            }
            alt=""
          />

          <img className="club" src={props.player.club} alt="" />
          <img className="country" src={props.player.country} alt="" />
          <span className="hisPosition">{props.player.hisPosition}</span>
          <h3>{props.player.name}</h3>
          <span className="ovr">{props.player.ovr}</span>
          <PlayerPreferPositions position={props.player.position} />
        </>
      ) : (
        <img
          className="card_background"
          src="images/cardTemplateHide.png"
          alt=""
        />
      )}
    </div>
  );
};

export default TemplateSelectedCard;
