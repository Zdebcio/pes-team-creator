import React, { Component } from "react";

import Start from "./Start";
import Game from "./Game";

import "../styles/App.css";

class App extends Component {
  state = {
    startPage: true,
    numberOfUsers: 1,
    numberOfPlayers: 25
  };

  handleClickStartGame = page => {
    if (this.state.startPage) {
      this.setState({
        startPage: page
      });
    } else if (!this.state.startPage) {
      this.setState({
        startPage: page,
        numberOfUsers: 1,
        numberOfPlayers: 25
      });
    }
  };

  handleChangeNumberOf = (type, name) => {
    if (name === "users") {
      if (type === "-" && this.state.numberOfUsers > 1) {
        this.setState(prevState => ({
          numberOfUsers: prevState.numberOfUsers - 1
        }));
      } else if (type === "+" && this.state.numberOfUsers < 10) {
        this.setState(prevState => ({
          numberOfUsers: prevState.numberOfUsers + 1
        }));
      }
    } else if (name === "players") {
      if (type === "-" && this.state.numberOfPlayers > 2) {
        this.setState(prevState => ({
          numberOfPlayers: prevState.numberOfPlayers - 1
        }));
      } else if (type === "+" && this.state.numberOfPlayers < 32) {
        this.setState(prevState => ({
          numberOfPlayers: prevState.numberOfPlayers + 1
        }));
      }
    }
  };

  render() {
    return (
      <div className="app">
        {this.state.startPage ? (
          <Start
            isNewGame={this.handleClickStartGame}
            users={this.state.numberOfUsers}
            numberOfPlayers={this.state.numberOfPlayers}
            changeNumberOf={this.handleChangeNumberOf}
          />
        ) : (
          <Game
            isNewGame={this.handleClickStartGame}
            users={this.state.numberOfUsers}
            rounds={this.state.numberOfPlayers}
          />
        )}
        {/* <Game
          isNewGame={this.handleClickStartGame}
          users={this.state.numberOfUsers}
          rounds={this.state.numberOfPlayers}
        /> */}
      </div>
    );
  }
}

export default App;
