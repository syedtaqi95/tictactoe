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

const GameResults = ({ results }: { results: (1 | 2 | null)[] }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top">Results</TableCaption>
        <Thead>
          <Tr>
            <Th>Game #</Th>
            <Th>Result</Th>
          </Tr>
        </Thead>
        <Tbody>
          {results.map((res, i) => (
            <Tr key={i}>
              <Td>{i + 1}</Td>
              <Td>{res ? `Player ${res} win` : "Draw"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default GameResults;
