import React, { useContext } from "react";
import { gameContext } from "../contexts/GameContext";

export default function ScoreButton(props) {
  const { changeScore } = useContext(gameContext);

  return (
    <button onClick={() => changeScore(props.playerId, props.number)}>
      {props.children}
    </button>
  );
}
