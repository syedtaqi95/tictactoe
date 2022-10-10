import { Grid } from "@chakra-ui/react";
import React from "react";
import Square from "./Square";

const Board = () => {
  // Create a 3x3 grid of Squares
  const grid = [...Array(3).keys()].map((row) =>
    [...Array(3).keys()].map((col) => <Square key={`${row} ${col}`} row={row} col={col} />)
  );
  return <Grid templateColumns="repeat(3, 1fr)">{grid}</Grid>;
};

export default Board;
