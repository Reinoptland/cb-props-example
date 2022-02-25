import React, { useContext } from "react";
import { GameContext } from "../App";

export default function ScoreButton(props) {
  const { changeScore } = useContext(GameContext);

  return (
    <button onClick={() => changeScore(props.playerId, props.number)}>
      {props.children}
    </button>
  );
}
