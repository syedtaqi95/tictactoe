import React, { useState, useEffect } from "react";
import Square from "components/Square";
import { Button, Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { GameState } from "types";

const GameContainer = () => {
  const [gameState, setGameState] = useState(GameState.Initial);
  const [winner, setWinner] = useState<null | 1 | 2>(null);

  useEffect(() => {
    if (winner) {
      setGameState(GameState.Winner);
    }
  }, [winner]);

  const handleResetGame: () => void = () => {
    setGameState(GameState.Initial);
    setWinner(null);
  };

  const displayGameStatus: () => string = () => {
    switch (gameState) {
      case GameState.Initial:
        return "Choose a square to start the game";
      case GameState.Player1Turn:
        return "Next turn: Player 1";
      case GameState.Player2Turn:
        return "Next turn: Player 2";
      case GameState.Winner:
        return `Player ${winner} wins`;
      case GameState.Tie:
        return "Game ended in a draw";
      default:
        return "";
    }
  };

  // Create a 3x3 grid of Squares
  const grid = [...Array(3).keys()].map((row) =>
    [...Array(3).keys()].map((col) => (
      <GridItem
        key={`${row} ${col}`}
        h="20"
        w="20"
        style={{ cursor: "pointer" }}
      >
        <Square gameState={gameState} setGameState={setGameState} />
      </GridItem>
    ))
  );

  return (
    <VStack as="section">
      {/* Game board */}
      <Grid templateColumns="repeat(3, 1fr)">{grid}</Grid>

      {/* Game status */}
      <Text>{displayGameStatus()}</Text>

      {/* Reset button */}
      <Button gap={2} onClick={handleResetGame}>
        <Text>Reset Game </Text>
        <Icon inline={true} height="1.4rem" icon="system-uicons:reset" />
      </Button>
    </VStack>
  );
};

export default GameContainer;
