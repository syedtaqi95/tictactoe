import React from "react";
import {
  Heading,
  Text,
  VStack,
  Button,
  useColorMode,
  Container,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="5xl" p={4}>
      <VStack h="100vh" spacing={8} m={2}>
        {/* Title and Color Mode Button */}
        <Flex w="5xl" justify="space-between" p={4} gap="2">
          <Heading>Tic Tac Toe</Heading>
          <Spacer />
          <Button onClick={toggleColorMode} alignSelf="end">
            <Icon
              icon={colorMode === "light" ? "bi:moon-fill" : "bi:sun"}
              inline={true}
              height="1.4em"
            />
          </Button>
        </Flex>

        {/* Game Board */}
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius
          libero natus dolore eveniet maxime dolorem placeat sequi omnis atque
          unde necessitatibus aperiam error commodi, est, facilis laborum sint
          quos?
        </Text>
      </VStack>
    </Container>
  );
};

export default Page;
