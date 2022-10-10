import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Heading>Tic Tac Toe</Heading>
    </ChakraProvider>
  );
};

export default App;
