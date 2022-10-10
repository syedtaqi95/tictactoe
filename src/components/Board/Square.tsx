import React from "react";
import { Box, GridItem } from "@chakra-ui/react";

const Square = ({ row, col }: { row: Number; col: Number }) => {
  return (
    <GridItem h="20" w="20" onClick={() => console.log(row, col)}>
      <Box w="100%" h="100%" border="1px" borderColor="black" />
    </GridItem>
  );
};

export default Square;
