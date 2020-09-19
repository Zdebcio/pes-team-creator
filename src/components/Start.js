import React from 'react';

import '../styles/Start.css';

const Start = (props) => {
  return (
    <div className="start">
      <h1>PES team creator</h1>
      <h2>Ilość graczy:</h2>
      <div className="users">
        <button id="-" onClick={() => props.changeNumberOf('-', 'users')}>
          <i className="far fa-minus-square" />
        </button>
        <span>{props.users}</span>
        <button id="+" onClick={() => props.changeNumberOf('+', 'users')}>
          <i className="far fa-plus-square" />
        </button>
      </div>
      <h2>Ilość zawodników:</h2>
      <div className="players">
        <button id="-" onClick={() => props.changeNumberOf('-', 'players')}>
          <i className="far fa-minus-square" />
        </button>
        <span>{props.numberOfPlayers}</span>
        <button id="+" onClick={() => props.changeNumberOf('+', 'players')}>
          <i className="far fa-plus-square" />
        </button>
      </div>
      <button className="start_draw" onClick={() => props.isNewGame(false)}>
        Start draw
      </button>
    </div>
  );
};

export default Start;
