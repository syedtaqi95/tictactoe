import React, { useState, useRef } from "react";
import Square from "components/Square";
import { Text, VStack, Grid, GridItem, Flex } from "@chakra-ui/react";
import { GameState, SquareState, SquareFill } from "types";
import TextIconButton from "components/TextIconButton";
import Leaderboard from "components/Leaderboard";
import GameResults from "components/GameResults";
import useLocalStorage from "hooks/useLocalStorage";

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

  // Local storage - previous leaderboard and results
  const [results, setResults] = useLocalStorage("results", []);

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

    for (let winCombo of winCombos) {
      const [a, b, c] = winCombo;
      if (
        newBoardState[a].fill !== SquareFill.Empty &&
        newBoardState[a].fill === newBoardState[b].fill &&
        newBoardState[a].fill === newBoardState[c].fill
      ) {
        // found winner
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

    // Winner not found
    return false;
  };

  // Handler for player moves
  const handleSquareClick = (idx: number) => {
    if (boardState[idx].fill === SquareFill.Empty) {
      // Create a deep copy of board
      let newBoardState: SquareState[] = [];
      for (const square of boardState) {
        newBoardState.push({ ...square });
      }

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
      remainingMoves.current -= 1;

      // Check if there is a winner or tie
      if (!findWinner(newBoardState) && remainingMoves.current === 0) {
        setGameState(GameState.Tie);
      }
    }
  };

  // Reset button handler
  const handleResetGame = () => {
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

  // "Add to Leaderboard" button handler
  const handleSaveResult = () => {
    // Update results table
    let newResults = [...results];
    newResults.push(winner);
    setResults(newResults);

    // Reset the game
    handleResetGame();
  };

  // "Reset History" button handler
  const handleResetHistory = () => {
    setResults([]);
  };

  // Returns the game status as a string
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
          handleClick={handleSquareClick}
        />
      </GridItem>
    ))
  );

  return (
    <VStack w="100%" as="section" gap={2}>
      {/* Game board */}
      <Grid templateColumns={`repeat(${boardLen}, 1fr)`}>{grid}</Grid>

      {/* Game status */}
      <Text>{displayGameStatus()}</Text>

      {/* Reset button */}
      <TextIconButton
        handleClick={handleResetGame}
        text="Reset game "
        icon="system-uicons:reset"
      />

      {/* Add to leaderboard button */}
      {gameState === GameState.Tie || gameState === GameState.Winner ? (
        <TextIconButton
          handleClick={handleSaveResult}
          text="Add to leaderboard "
          icon="carbon:save"
        />
      ) : null}

      {/* Leaderboard and Results */}
      <Flex w="100%" direction="row" wrap="wrap" justify="space-around" gap={8}>
        <Leaderboard results={results} />
        <GameResults results={results} />
      </Flex>

      {/* Reset History Button */}
      <TextIconButton
        handleClick={handleResetHistory}
        text="Reset history "
        icon="system-uicons:reset"
      />
    </VStack>
  );
};

export default GameContainer;
