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
import React from "react";

const Leaderboard = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top">Leaderboard</TableCaption>
        <Thead>
          <Tr>
            <Th>Player 1</Th>
            <Th>Player 2</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>2</Td>
            <Td>3</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Leaderboard;
