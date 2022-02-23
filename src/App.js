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

  function changeScore(playerId, number) {
    console.log("ID:", playerId, "NUMBER", number);
    // UPDATE THE SCORE OF THAT PLAYER HERE ..
    const updatedPlayers = players.map((player) => {
      if (player.id === playerId) {
        console.log("UPDATE THIS PLAYER", player);
        return { ...player, score: player.score + number };
      } else {
        return player;
      }
    });
    console.log(updatedPlayers);
    setPlayers(updatedPlayers);
  }

  function changeName(playerId, input) {
    console.log("ID:", playerId, "NAME", input);
    // UPDATE THE NAME OF THAT PLAYER HERE ..
    // setPlayers()
  }

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
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              changeName={changeName}
              changeScore={changeScore}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
