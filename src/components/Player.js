import { useState } from "react";

export default function Player() {
  const [player, setPlayer] = useState({ name: "Rein", score: 0 });
  const [editMode, setEditMode] = useState(true);
  return (
    <div>
      <h2>{player.name}</h2>
      <h3>{player.score}</h3>
      <div>
        <button
          onClick={(e) => setPlayer({ ...player, score: player.score - 1 })}
        >
          -
        </button>
        <button
          onClick={(e) => setPlayer({ ...player, score: player.score + 1 })}
        >
          +
        </button>
      </div>
      {editMode && (
        <input
          value={player.name}
          onChange={(e) => setPlayer({ ...player, name: e.target.value })}
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
