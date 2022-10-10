import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { SquareState } from "types";

const Square = ({squareState}: {squareState: SquareState}) => {
  const borderColor = useColorModeValue("black", "white");
  return <Box w="100%" h="100%" border="1px" borderColor={borderColor} />;
};

export default Square;
