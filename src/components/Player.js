import { useContext, useState } from "react";
import { GameContext } from "../App";
import ResetGame from "./ResetGame";
import ScoreButton from "./ScoreButton";

export default function Player(props) {
  const [editMode, setEditMode] = useState(true);
  const { changeName, changeScore } = useContext(GameContext);

  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.score}</h3>
      <div>
        <ScoreButton number={-1} playerId={props.id}>
          -
        </ScoreButton>
        <ScoreButton number={1} playerId={props.id}>
          +
        </ScoreButton>
        <ScoreButton number={5} playerId={props.id}>
          + 5
        </ScoreButton>
        <ResetGame />
      </div>
      {editMode && (
        <input
          value={props.name}
          onChange={(e) => changeName(props.id, e.target.value)}
        />
      )}
      {editMode ? (
        <button onClick={() => setEditMode(false)}>Submit</button>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit</button>
      )}
    </div>
  );
}
