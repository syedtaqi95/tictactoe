import React, { useState, useRef } from "react";
import Square from "components/Square";
import { Button, Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { GameState, SquareState, SquareFill } from "types";
import ScaleTapComponent from "components/ScaleTapComponent";

const GameContainer = () => {
  const boardLen = 3;

  // State and Ref variables
  const [gameState, setGameState] = useState(GameState.Initial);
  const [boardState, setBoardState] = useState<SquareState[]>(
    Array(boardLen * boardLen).fill({
      fill: SquareFill.Empty,
      winner: null,
    })
  );
  const [winner, setWinner] = useState<null | 1 | 2>(null);
  const remainingMoves = useRef(boardLen * boardLen);

  // checks if there is a winner, sets the winning player and colours the winning squares
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
        newBoardState[a].fill !== SquareFill.Empty &&
        newBoardState[a].fill === newBoardState[b].fill &&
        newBoardState[a].fill === newBoardState[c].fill
      ) {
        setGameState(GameState.Winner);
        newBoardState[a].winner = true;
        newBoardState[b].winner = true;
        newBoardState[c].winner = true;
        if (newBoardState[a].fill === SquareFill.X) {
          setWinner(1);
        } else {
          setWinner(2);
        }
        return true;
      }
    }
    return false;
  };

  // Handler for player moves
  const handleClick = (idx: number) => {
    if (boardState[idx].fill === SquareFill.Empty) {
      // Create a deep copy of board
      let newBoardState: SquareState[] = [];
      for (const square of boardState) {
        newBoardState.push({ ...square });
      }
      remainingMoves.current -= 1;

      if (
        gameState === GameState.Initial ||
        gameState === GameState.Player1Turn
      ) {
        // Player 1 move (X)
        newBoardState[idx].fill = SquareFill.X;
        setGameState(GameState.Player2Turn);
      } else if (gameState === GameState.Player2Turn) {
        // Player 2 move (O)
        newBoardState[idx].fill = SquareFill.O;
        setGameState(GameState.Player1Turn);
      }
      setBoardState(newBoardState);

      // Check if there is a winner or tie
      if (!findWinner(newBoardState) && remainingMoves.current === 0) {
        setGameState(GameState.Tie);
      }
    }
  };

  // Reset button handler
  const handleResetGame: () => void = () => {
    setGameState(GameState.Initial);
    setBoardState(
      Array(boardLen * boardLen).fill({
        fill: SquareFill.Empty,
        winner: null,
      })
    );
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
      <GridItem key={`${row} ${col}`} h="20" w="20">
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
      <ScaleTapComponent>
        <Button gap={2} onClick={handleResetGame}>
          <Text>Reset Game </Text>
          <Icon inline={true} height="1.4rem" icon="system-uicons:reset" />
        </Button>
      </ScaleTapComponent>
    </VStack>
  );
};

export default GameContainer;
