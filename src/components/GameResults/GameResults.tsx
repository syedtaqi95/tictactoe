import React from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

const GameResults = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top">Results</TableCaption>
        <Thead>
          <Tr>
            <Th>Game #</Th>
            <Th>Winner</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Player 1</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default GameResults;
