import { useState } from "react";

export default function Player(props) {
  const [player, setPlayer] = useState({ name: "", score: 0 });
  const [editMode, setEditMode] = useState(true);

  function changeScore(number) {
    // setPlayer({ ...player, score: player.score + number });
    props.score = props.score + number;
    console.log(props.score);
  }

  function changeName(input) {
    // setPlayer({ ...player, name: input });
    props.name = input;
    console.log(props.name);
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.score}</h3>
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
