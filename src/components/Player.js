import { useState } from "react";

export default function Player(props) {
  const [editMode, setEditMode] = useState(true);

  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.score}</h3>
      <div>
        <button onClick={() => props.changeScore(props.id, -1)}>-</button>
        <button onClick={() => props.changeScore(props.id, 1)}>+</button>
      </div>
      {editMode && (
        <input
          value={props.name}
          onChange={(e) => props.changeName(props.id, e.target.value)}
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
