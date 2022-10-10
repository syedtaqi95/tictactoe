import React, { useState } from "react";
import Board from "components/Board";
import { Button, Text, VStack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { GameState } from "types";

const GameContainer = () => {
  const [gameState, setGameState] = useState(GameState.Initial);

  const handleResetGame: () => void = () => {
    setGameState(GameState.Initial);
  };

  const displayGameStatus: () => string = () => {
    switch (gameState) {
      case GameState.Initial:
        return "Choose a square to start the game";
      case GameState.Player1Turn:
        return "Next turn: Player 1";
      case GameState.Player2Turn:
        return "Next turn: Player 2";
      default:
        return "";
    }
  };

  return (
    <VStack as="section">
      <Board gameState={gameState} />

      <Text>{displayGameStatus()}</Text>

      <Button gap={2} onClick={handleResetGame}>
        <Text>Reset Game </Text>
        <Icon inline={true} height="1.4rem" icon="system-uicons:reset" />
      </Button>
    </VStack>
  );
};

export default GameContainer;
