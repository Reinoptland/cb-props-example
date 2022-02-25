import React, { useContext } from "react";
import { GameContext } from "../App";

export default function ResetGame() {
  const { resetGame } = useContext(GameContext);
  return <button onClick={resetGame}>ResetGame</button>;
}
