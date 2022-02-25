import { useContext } from "react";
import { GameContext } from "../App";

export default function PlayerCounter(props) {
  const gameState = useContext(GameContext);
  return <div>NO. of players: {gameState.players.length}</div>;
}
