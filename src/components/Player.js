import { useState } from "react";

export default function Player() {
  const [player, setPlayer] = useState({ name: "Rein", score: 0 });
  const [editMode, setEditMode] = useState(true);

  function changeScore(number) {
    setPlayer({ ...player, score: player.score + number });
  }

  function changeName(input) {
    setPlayer({ ...player, name: input });
  }

  return (
    <div>
      <h2>{player.name}</h2>
      <h3>{player.score}</h3>
      <div>
        <button onClick={() => changeScore(-1)}>-</button>
        <button onClick={() => changeScore(1)}>+</button>
      </div>
      {editMode && (
        <input
          value={player.name}
          onChange={(e) => changeName(e.target.value)}
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
