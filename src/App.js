import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";
import { useState, createContext } from "react";
import PlayerCounter from "./components/PlayerCounter";

export const GameContext = createContext();

function App() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Harm", score: 2 },
    { id: 2, name: "Mauro", score: 5 },
    { id: 3, name: "Rein", score: 1 },
    { id: 4, name: "Leroy", score: 3 },
  ]);

  function changeScore(playerId, number) {
    const updatedPlayers = players.map((player) => {
      if (player.id === playerId) {
        return { ...player, score: player.score + number };
      } else {
        return player;
      }
    });
    setPlayers(updatedPlayers);
  }

  function changeName(playerId, input) {
    const updatedPlayers = players.map((player) => {
      if (player.id === playerId) {
        return { ...player, name: input };
      } else {
        return player;
      }
    });
    setPlayers(updatedPlayers);
  }

  const sortedPlayers = players.sort((playerA, playerB) => {
    return playerB.score - playerA.score;
  });

  return (
    <GameContext.Provider
      value={{
        players: players,
        changeScore: changeScore,
        changeName: changeName,
      }}
    >
      <div className="App">
        <PlayerCounter />
        <header className="App-header">
          {sortedPlayers.map((player) => {
            return (
              <Player
                key={player.id}
                id={player.id}
                name={player.name}
                score={player.score}
              />
            );
          })}
        </header>
      </div>
    </GameContext.Provider>
  );
}

export default App;
