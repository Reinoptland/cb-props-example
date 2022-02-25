import { useState, createContext } from "react";

export const gameContext = createContext();

export default function GameContext(props) {
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

  function resetGame() {
    const updatedPlayers = players.map((player) => ({ ...player, score: 0 }));
    setPlayers(updatedPlayers);
  }

  return (
    <gameContext.Provider
      value={{
        players: players,
        changeScore: changeScore,
        changeName: changeName,
        resetGame: resetGame,
      }}
    >
      {props.children}
    </gameContext.Provider>
  );
}
