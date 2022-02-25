import { useContext } from "react";
import { GameContext } from "../App";

export default function PlayerCounter(props) {
  const gameState = useContext(GameContext);
  console.log("WHAT IS THIS?", gameState);
  return <div>NO. of players: {gameState.players.length}</div>;
}
