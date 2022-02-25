import React, { useContext } from "react";
import { gameContext } from "../contexts/GameContext";

export default function ResetGame() {
  const { resetGame } = useContext(gameContext);
  return <button onClick={resetGame}>ResetGame</button>;
}
