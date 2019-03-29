import React from "react";

import TemplateSelectedCard from "./TemplateSelectedCard";
import "../styles/SelectedCards.css";

class SelectedCards extends React.Component {
  state = {
    selectedPlayers: this.props.selectedPlayers
  };

  cards = () => {
    if (!this.props.areCardsOpened) {
      return (
        <button className="next_step active" onClick={this.props.openCards}>
          Zaakceptuj
        </button>
      );
    } else if (this.props.areCardsOpened && !this.props.isCardSelected) {
      return (
        <button className="next_step active" onClick={this.props.takeCard}>
          Wybierz kartę
        </button>
      );
    } else if (this.props.areCardsOpened && this.props.isCardSelected) {
      return (
        <button className="next_step active" onClick={this.props.newDraw}>
          Nowe losowanie
        </button>
      );
    }
  };

  componentDidUpdate() {
    let selectedPlayers = [...this.props.selectedPlayers];
    if (this.props.isCardSelected) {
      selectedPlayers = selectedPlayers.filter(player => player.isSelected);
    }

    if (selectedPlayers.length !== this.state.selectedPlayers.length) {
      this.setState({
        selectedPlayers
      });
    }
  }

  render() {
    return (
      <div className="actual_cards">
        <h2>Aktualnie wybrane karty:</h2>
        <div className="cards">
          {this.state.selectedPlayers.map(player => (
            <TemplateSelectedCard
              key={player.id}
              player={player}
              isOpen={this.props.areCardsOpened}
              selectCard={this.props.selectCard}
            />
          ))}
        </div>
        {this.cards()}
      </div>
    );
  }
}

export default SelectedCards;
