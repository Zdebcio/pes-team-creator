import React from 'react';

import CardsListToChoose from './CardsListToChoose';
import ActualUserCards from './ActualUserCards';
import SelectedCards from './SelectedCards';
import BoardWithPositions from './BoardWithPositions';
import FinalResults from './FinalResults';
import NavigationBar from './NavigatonBar';

import '../styles/Game.css';

class Game extends React.Component {
  state = {
    users: [],
    players: [],
    playersFilterAndRandom: [],
    selectedPlayers: [],
    isDataLoaded: false,
    indexOfActiveUser: 0,
    roundsToEnd: this.props.rounds,
    isDrawStarted: false,
    areCardsOpened: false,
    isCardSelected: false,
    numberOfCards: 0,
  };

  componentDidMount() {
    setTimeout(this.waitForData, 1000);
  }

  waitForData = () => {
    fetch('data/players.json')
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          players: data,
          isDataLoaded: true,
        });
      })
      .catch((err) => console.log(err + '. Błąd podczas pobierania danych'));

    const users = [];

    for (let i = 0; i < this.props.users; i++) {
      users.push({
        name: `Player ${i + 1}`,
        cards: [],
      });
    }

    this.setState({
      users,
    });
  };

  handleFilterByPositionClick = (position) => {
    if (!this.state.isDrawStarted) {
      const playersFilterAndRandom = [];
      const playersFilter = this.state.players.filter(
        (player) => player.position[position] && !player.cardSelected
      );
      while (playersFilter.length > 0) {
        const index = Math.floor(Math.random() * playersFilter.length);
        playersFilterAndRandom.push(playersFilter[index]);
        playersFilter.splice(index, 1);
      }
      this.setState({
        playersFilterAndRandom,
        isDrawStarted: true,
      });
    }
  };

  handleTakeCardToOpenClick = (id) => {
    const playersFilterAndRandom = [...this.state.playersFilterAndRandom];
    let numberOfCards = 0;
    if (this.state.playersFilterAndRandom.length >= 5) {
      numberOfCards = 5;
    } else if (this.state.playersFilterAndRandom.length < 5) {
      numberOfCards = playersFilterAndRandom.length;
    }

    const activeNumber = playersFilterAndRandom.filter(
      (player) => player.isActive
    ).length;
    playersFilterAndRandom.forEach((player) => {
      if (
        player.id === id &&
        !player.isActive &&
        activeNumber < numberOfCards
      ) {
        player.isActive = true;
      } else if (player.id === id && player.isActive) {
        player.isActive = false;
      }
    });
    const selectedPlayers = playersFilterAndRandom.filter(
      (player) => player.isActive
    );

    this.setState({
      playersFilterAndRandom,
      selectedPlayers,
      numberOfCards,
    });
  };

  handleOpenCardsClick = () => {
    if (this.state.selectedPlayers.length === this.state.numberOfCards) {
      this.setState({
        areCardsOpened: true,
      });
    }
  };

  handleIsCardSelectedClick = (id) => {
    const selectedPlayers = [...this.state.selectedPlayers];
    if (this.state.areCardsOpened) {
      selectedPlayers.forEach((player) => {
        if (player.id !== id) {
          player.isSelected = false;
        } else if (player.id === id) {
          player.isSelected = true;
        }
      });
    }

    this.setState({
      selectedPlayers,
    });
  };

  handleTakeSelectedCardClick = () => {
    const selectedPlayers = [...this.state.selectedPlayers];
    const players = [...this.state.players];
    const users = this.state.users;

    let index = 0;
    const playerChoose = selectedPlayers.filter((player) => player.isSelected);
    if (playerChoose.length === 1) {
      players.forEach((player, id) => {
        if (player.id === playerChoose[0].id) {
          index = id;
        }
      });

      const selectedPlayer = this.state.players.splice(index, 1);

      users[this.state.indexOfActiveUser].cards.push(selectedPlayer[0]);

      this.setState({
        users,
        isCardSelected: true,
      });
    }
  };

  handleStartNewDrawClick = () => {
    const playersFilterAndRandom = [];
    const selectedPlayers = [];
    const players = [...this.state.players];
    players.forEach((player) => {
      player.cardSelected = false;
      player.isActive = false;
      player.isSelected = false;
    });

    let indexOfActiveUser = this.state.indexOfActiveUser;
    let roundsToEnd = this.state.roundsToEnd;
    if (this.state.isCardSelected) {
      if (indexOfActiveUser === this.state.users.length - 1) {
        if (this.state.roundsToEnd > 0) {
          roundsToEnd--;
        }
        indexOfActiveUser = 0;
      } else {
        indexOfActiveUser++;
      }
    }

    this.setState({
      players,
      indexOfActiveUser,
      roundsToEnd,
      playersFilterAndRandom,
      selectedPlayers,
      areCardsOpened: false,
      isCardSelected: false,
      isDrawStarted: false,
    });
  };

  render() {
    const page = () => {
      if (this.state.isDataLoaded) {
        if (!this.state.isDrawStarted && this.state.roundsToEnd !== 0) {
          return (
            <BoardWithPositions
              cardsPosition={this.handleFilterByPositionClick}
            />
          );
        } else if (!this.state.isDrawStarted && this.state.roundsToEnd === 0) {
          return <FinalResults users={this.state.users} />;
        } else if (this.state.isDrawStarted && !this.state.areCardsOpened) {
          return (
            <CardsListToChoose
              randomPlayers={this.state.playersFilterAndRandom}
              isCardActive={this.handleTakeCardToOpenClick}
            />
          );
        } else if (this.state.isDrawStarted && this.state.areCardsOpened) {
          return (
            <ActualUserCards
              activeUser={this.state.users}
              index={this.state.indexOfActiveUser}
            />
          );
        }
      } else {
        return <h3 className="loading_data">Wczytuję dane...</h3>;
      }
    };
    return (
      <>
        <NavigationBar
          isNewGame={this.props.isNewGame}
          isDrawStarted={this.state.isDrawStarted}
          areCardsOpened={this.state.areCardsOpened}
          startNewDraw={this.handleStartNewDrawClick}
          activeUser={this.state.indexOfActiveUser}
        />
        <section className="container">{page()}</section>
        {/* <section className="container">
          <FinalResults users={this.state.users} />
        </section> */}
        {this.state.selectedPlayers.length > 0 && (
          <SelectedCards
            selectedPlayers={this.state.selectedPlayers}
            openCards={this.handleOpenCardsClick}
            areCardsOpened={this.state.areCardsOpened}
            selectCard={this.handleIsCardSelectedClick}
            takeCard={this.handleTakeSelectedCardClick}
            isCardSelected={this.state.isCardSelected}
            newDraw={this.handleStartNewDrawClick}
            numberOfCards={this.state.numberOfCards}
          />
        )}
      </>
    );
  }
}

export default Game;
