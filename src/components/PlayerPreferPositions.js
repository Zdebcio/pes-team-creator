import React from "react";

import "../styles/PlayerPreferPositions.css";

const PlayerPreferPositions = props => {
  const isPlayable = position => {
    return props.position[position] ? `${position} playable` : `${position}`;
  };
  return (
    <div className="positions_card">
      <div className={isPlayable("cf")} />
      <div className={isPlayable("ss")} />
      <div className={isPlayable("lwf")} />
      <div className={isPlayable("rwf")} />
      <div className={isPlayable("lmf")} />
      <div className={isPlayable("rmf")} />
      <div className={isPlayable("amf")} />
      <div className={isPlayable("cmf")} />
      <div className={isPlayable("dmf")} />
      <div className={isPlayable("lb")} />
      <div className={isPlayable("cb")} />
      <div className={isPlayable("rb")} />
      <div className={isPlayable("gk")} />
    </div>
  );
};

export default PlayerPreferPositions;
