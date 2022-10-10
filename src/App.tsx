import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Heading, Text, VStack } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <VStack h="100vh" spacing={8}>
        <Heading>Tic Tac Toe</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius
          libero natus dolore eveniet maxime dolorem placeat sequi omnis atque
          unde necessitatibus aperiam error commodi, est, facilis laborum sint
          quos?
        </Text>
      </VStack>
    </ChakraProvider>
  );
};

export default App;
