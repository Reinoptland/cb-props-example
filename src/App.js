import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";
import PlayerCounter from "./components/PlayerCounter";
import ResetGame from "./components/ResetGame";
import { useContext } from "react";
import { gameContext } from "./contexts/GameContext";

function App() {
  const { players } = useContext(gameContext);
  const sortedPlayers = players.sort((playerA, playerB) => {
    return playerB.score - playerA.score;
  });

  return (
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
      <ResetGame />
    </div>
  );
}

export default App;
