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

const Leaderboard = ({
  player1Score,
  player2Score,
}: {
  player1Score: number;
  player2Score: number;
}) => {
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
            <Td>{player1Score}</Td>
            <Td>{player2Score}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Leaderboard;
