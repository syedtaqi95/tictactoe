import React from "react";
import { Center, useColorModeValue } from "@chakra-ui/react";
import { SquareState } from "types";
import { Icon } from "@iconify/react";

const Square = ({
  idx,
  squareState,
  handleClick,
}: {
  idx: number;
  squareState: SquareState;
  handleClick: (idx: number) => void;
}) => {
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
      borderColor={useColorModeValue("black", "white")}
      onClick={() => handleClick(idx)}
    >
      <Icon height="3rem" icon={displayIcon()} />
    </Center>
  );
};

export default Square;
