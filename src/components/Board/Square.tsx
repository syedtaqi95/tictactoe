import React from "react";
import { Box, GridItem, useColorModeValue } from "@chakra-ui/react";

const Square = ({ row, col }: { row: Number; col: Number }) => {
  const borderColor = useColorModeValue("black", "white");
  return (
    <GridItem
      h="20"
      w="20"
      onClick={() => console.log(`Clicked (${row}, ${col})`)}
      style={{ cursor: "pointer" }}
    >
      <Box w="100%" h="100%" border="1px" borderColor={borderColor} />
    </GridItem>
  );
};

export default Square;
