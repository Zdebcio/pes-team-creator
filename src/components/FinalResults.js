import React from "react";

import TemplateUserCard from "./TemplateUserCard";
import "../styles/ActualUserCards.css";
import "../styles/FinalResults.css";

class FinalResults extends React.Component {
  state = {
    numberOfActiveUser: 1
  };

  handleChangeUserClick = type => {
    let numberOfActiveUser = this.state.numberOfActiveUser;
    if (type === "-") {
      if (numberOfActiveUser > 1) {
        numberOfActiveUser--;
      } else if (numberOfActiveUser === 1) {
        numberOfActiveUser = this.props.users.length;
      }
    } else if (type === "+") {
      if (numberOfActiveUser < this.props.users.length) {
        numberOfActiveUser++;
      } else if (numberOfActiveUser === this.props.users.length) {
        numberOfActiveUser = 1;
      }
    }

    this.setState({
      numberOfActiveUser
    });
  };

  render() {
    return (
      <div className="results">
        <h1>Koniec losowania, oto wyniki:</h1>
        <div className="user_name">
          <button onClick={() => this.handleChangeUserClick("-")}>
            <i className="fas fa-arrow-circle-left" />
          </button>
          <h2>{`Gracz ${this.state.numberOfActiveUser}`}</h2>
          <button onClick={() => this.handleChangeUserClick("+")}>
            <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
        <div className="user_cards">
          {this.props.users[this.state.numberOfActiveUser - 1].cards.map(
            player => (
              <TemplateUserCard key={player.id} player={player} />
            )
          )}
        </div>
      </div>
    );
  }
}

export default FinalResults;
