import React, { useState, useRef } from "react";
import Square from "components/Square";
import { Button, Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { GameState, SquareState } from "types";

const GameContainer = () => {
  const boardLen = 3;

  // State and Ref variables
  const [gameState, setGameState] = useState(GameState.Initial);
  const [boardState, setBoardState] = useState<SquareState[]>(
    Array(boardLen * boardLen).fill(SquareState.Empty)
  );
  const [winner, setWinner] = useState<null | 1 | 2>(null);
  const remainingMoves = useRef(boardLen * boardLen);

  const findWinner: (newBoardState: SquareState[]) => boolean = (
    newBoardState
  ) => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winCombos.length; i++) {
      const [a, b, c] = winCombos[i];
      if (
        newBoardState[a] !== SquareState.Empty &&
        newBoardState[a] === newBoardState[b] &&
        newBoardState[a] === newBoardState[c]
      ) {
        setGameState(GameState.Winner);
        if (newBoardState[a] === SquareState.X) {
          setWinner(1);
        } else {
          setWinner(2);
        }
        return true;
      }
    }
    return false;
  };

  // Handler for player move
  const handleClick = (idx: number) => {
    const squareState = boardState[idx];

    if (squareState === SquareState.Empty) {
      let newBoardState = [...boardState];
      remainingMoves.current -= 1;
      
      if (
        gameState === GameState.Initial ||
        gameState === GameState.Player1Turn
      ) {
        // Player 1 move (X)
        newBoardState[idx] = SquareState.X;
        setGameState(GameState.Player2Turn);
      } else if (gameState === GameState.Player2Turn) {
        // Player 2 move (O)
        newBoardState[idx] = SquareState.O;
        setGameState(GameState.Player1Turn);
      }
      setBoardState(newBoardState);

      // Check if there is a winner
      if (!findWinner(newBoardState) && remainingMoves.current === 0) {
        setGameState(GameState.Tie);
      }
    }
  };

  // Reset button handler
  const handleResetGame: () => void = () => {
    setGameState(GameState.Initial);
    setBoardState(Array(9).fill(SquareState.Empty));
    setWinner(null);
    remainingMoves.current = boardLen * boardLen;
  };

  const displayGameStatus: () => string = () => {
    switch (gameState) {
      case GameState.Initial:
        return "Choose a square to start the game";
      case GameState.Player1Turn:
        return "Next turn: Player 1 (X)";
      case GameState.Player2Turn:
        return "Next turn: Player 2 (O)";
      case GameState.Winner:
        return `Player ${winner} wins`;
      case GameState.Tie:
        return "Game ended in a draw";
      default:
        return "";
    }
  };

  // Create a 3x3 grid of Squares
  const grid = [...Array(boardLen).keys()].map((row) =>
    [...Array(boardLen).keys()].map((col) => (
      <GridItem
        key={`${row} ${col}`}
        h="20"
        w="20"
        style={{ cursor: "pointer" }}
      >
        <Square
          idx={boardLen * row + col}
          squareState={boardState[boardLen * row + col]}
          handleClick={handleClick}
        />
      </GridItem>
    ))
  );

  return (
    <VStack as="section">
      {/* Game board */}
      <Grid templateColumns={`repeat(${boardLen}, 1fr)`}>{grid}</Grid>

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
