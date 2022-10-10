import React from "react";
import {
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <VStack h="100vh" spacing={8} m={2}>
        <HStack spacing={8}>
          <Heading>Tic Tac Toe</Heading>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </HStack>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius
          libero natus dolore eveniet maxime dolorem placeat sequi omnis atque
          unde necessitatibus aperiam error commodi, est, facilis laborum sint
          quos?
        </Text>
      </VStack>
    </div>
  );
};

export default Page;
