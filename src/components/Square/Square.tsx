import React, { useEffect, useState } from "react";
import { Center, useColorModeValue } from "@chakra-ui/react";
import { GameState, SquareState } from "types";
import { Icon } from "@iconify/react";

const Square = ({
  gameState,
  setGameState,
}: {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}) => {
  const borderColor = useColorModeValue("black", "white");
  const [squareState, setSquareState] = useState(SquareState.Empty);

  useEffect(() => {
    if (gameState === GameState.Initial) {
      setSquareState(SquareState.Empty);
    }
  }, [gameState]);

  const handleClick = () => {
    if (squareState === SquareState.Empty) {
      if (
        gameState === GameState.Initial ||
        gameState === GameState.Player1Turn
      ) {
        setSquareState(SquareState.X);
        setGameState(GameState.Player2Turn);
      } else if (gameState === GameState.Player2Turn) {
        setSquareState(SquareState.O);
        setGameState(GameState.Player1Turn);
      }
    }
  };

  const displayIcon: () => string = () => {
    switch (squareState) {
      case SquareState.O:
        return "akar-icons:circle";
      case SquareState.X:
        return "akar-icons:cross";
      default:
        return "";
    }
  };

  return (
    <Center
      w="100%"
      h="100%"
      border="1px"
      borderColor={borderColor}
      onClick={handleClick}
    >
      <Icon height="3rem" icon={displayIcon()} />
    </Center>
  );
};

export default Square;
