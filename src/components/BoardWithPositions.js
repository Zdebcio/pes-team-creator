import React from "react";

import "../styles/BoardWithPositions.css";

const BoardWithPositions = props => {
  return (
    <div className="positions_list">
      <h1>Wybierz pozycję:</h1>
      <div className="positions">
        <div className="cf" onClick={() => props.cardsPosition("cf")}>
          <span>cf</span>
        </div>
        <div className="ss" onClick={() => props.cardsPosition("ss")}>
          <span>ss</span>
        </div>
        <div className="lwf" onClick={() => props.cardsPosition("lwf")}>
          <span>lwf</span>
        </div>
        <div className="rwf" onClick={() => props.cardsPosition("rwf")}>
          <span>rwf</span>
        </div>
        <div className="lmf" onClick={() => props.cardsPosition("lmf")}>
          <span>lmf</span>
        </div>
        <div className="rmf" onClick={() => props.cardsPosition("rmf")}>
          <span>rmf</span>
        </div>
        <div className="amf" onClick={() => props.cardsPosition("amf")}>
          <span>amf</span>
        </div>
        <div className="cmf" onClick={() => props.cardsPosition("cmf")}>
          <span>cmf</span>
        </div>
        <div className="dmf" onClick={() => props.cardsPosition("dmf")}>
          <span>dmf</span>
        </div>
        <div className="lb" onClick={() => props.cardsPosition("lb")}>
          <span>lb</span>
        </div>
        <div className="cb" onClick={() => props.cardsPosition("cb")}>
          <span>cb</span>
        </div>
        <div className="rb" onClick={() => props.cardsPosition("rb")}>
          <span>rb</span>
        </div>
        <div className="gk" onClick={() => props.cardsPosition("gk")}>
          <span>gk</span>
        </div>
      </div>
    </div>
  );
};

export default BoardWithPositions;
