import React, { useState } from "react";
import Board from "components/Board";

const GameContainer = () => {
  const [nextPlayer, setNextPlayer] = useState(1);
  const togglePlayer = () => setNextPlayer(nextPlayer === 1 ? 2 : 1);

  return <Board />;
};

export default GameContainer;
