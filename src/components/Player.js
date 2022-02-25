import { useContext, useState } from "react";
import { GameContext } from "../App";

export default function Player(props) {
  const [editMode, setEditMode] = useState(true);
  const { changeName, changeScore } = useContext(GameContext);

  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.score}</h3>
      <div>
        <button onClick={() => changeScore(props.id, -1)}>-</button>
        <button onClick={() => changeScore(props.id, 1)}>+</button>
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
