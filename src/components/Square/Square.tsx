import React from "react";
import { Center, useColorModeValue } from "@chakra-ui/react";
import { SquareState, SquareFill } from "types";
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
  const winBgColor = useColorModeValue("teal.200", "teal.600");

  const displayIcon: () => string = () => {
    switch (squareState.fill) {
      case SquareFill.O:
        return "akar-icons:circle";
      case SquareFill.X:
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
      bg={squareState.winner ? winBgColor : "none"}
      onClick={() => handleClick(idx)}
    >
      <Icon height="3rem" icon={displayIcon()} />
    </Center>
  );
};

export default Square;
