import { useGame } from "../contexts/GameContext";

export default function ResetGame() {
  const { resetGame } = useGame();
  return <button onClick={resetGame}>ResetGame</button>;
}
