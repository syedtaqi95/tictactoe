import React from "react";
import {
  Heading,
  VStack,
  Button,
  useColorMode,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="5xl" p={4}>
      <VStack h="100vh" spacing={4} mt={4}>
        {/* Title and Color Mode Button */}
        <Flex w="100%" maxW="6xl" justify="space-between">
          <Heading as="h1">Tic Tac Toe</Heading>
          <Button onClick={toggleColorMode} alignSelf="end">
            <Icon
              icon={colorMode === "light" ? "bi:moon-fill" : "bi:sun"}
              inline={true}
              height="1.4em"
            />
          </Button>
        </Flex>

        {/* Game Instructions */}
        <VStack w="100%" align="flex-start">
          <Heading as="h2" size="lg">
            Game Rules
          </Heading>
          <Text>
            1. The game is played on a 3x3 grid of squares. <br />
            2. 2 players take turns putting their marks in empty squares. <br />
            3. The first player to get 3 of their marks in a row (up, down,
            across, or diagonally) is the winner. <br />
            4. When all 9 squares are full, the game is over. If no player has 3
            marks in a row, the game ends in a tie.
          </Text>
          <Text>
            Click on a square to <strong>start your game</strong>.
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Page;
