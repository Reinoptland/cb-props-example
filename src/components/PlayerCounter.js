import { useGame } from "../contexts/GameContext";

export default function PlayerCounter(props) {
  const gameState = useGame();
  return <div>NO. of players: {gameState.players.length}</div>;
}
