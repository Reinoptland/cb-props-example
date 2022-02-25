import { useGame } from "../contexts/GameContext";

export default function ScoreButton(props) {
  const { changeScore } = useGame();

  return (
    <button onClick={() => changeScore(props.playerId, props.number)}>
      {props.children}
    </button>
  );
}
