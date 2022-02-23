import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Harm", score: 2 },
    { id: 2, name: "Mauro", score: 5 },
    { id: 3, name: "Rein", score: 1 },
    { id: 4, name: "Leroy", score: 3 },
  ]);

  // console.log(players);
  const sortedPlayers = players.sort((playerA, playerB) => {
    return playerB.score - playerA.score;
  });

  // console.log(sortedPlayers);
  return (
    <div className="App">
      <header className="App-header">
        {sortedPlayers.map((player) => {
          return (
            <Player key={player.id} name={player.name} score={player.score} />
          );
        })}
      </header>
    </div>
  );
}

export default App;
