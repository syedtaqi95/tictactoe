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

const Leaderboard = ({ results }: { results: (1 | 2 | null)[] }) => {
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
            <Td>
              {results.reduce((prev, cur) => (cur === 1 ? prev + 1 : prev), 0)}
            </Td>
            <Td>
              {results.reduce((prev, cur) => (cur === 2 ? prev + 1 : prev), 0)}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Leaderboard;
