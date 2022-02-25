import { useContext } from "react";
import { gameContext } from "../contexts/GameContext";

export default function PlayerCounter(props) {
  const gameState = useContext(gameContext);
  return <div>NO. of players: {gameState.players.length}</div>;
}
