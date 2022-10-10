import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Square from "./Square";
import { GameState, SquareState } from "types";

const Board = ({ gameState }: { gameState: GameState }) => {
  // Create a 3x3 grid of Squares
  const grid = [...Array(3).keys()].map((row) =>
    [...Array(3).keys()].map((col) => (
      <GridItem
        key={`${row} ${col}`}
        h="20"
        w="20"
        style={{ cursor: "pointer" }}
      >
        <Square squareState={SquareState.Empty} />
      </GridItem>
    ))
  );
  return <Grid templateColumns="repeat(3, 1fr)">{grid}</Grid>;
};

export default Board;
