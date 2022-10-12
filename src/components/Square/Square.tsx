import React from "react";
import { Center, useColorModeValue } from "@chakra-ui/react";
import { SquareState, SquareFill } from "types";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Square = ({
  idx,
  squareState,
  handleClick,
}: {
  idx: number;
  squareState: SquareState;
  handleClick: (idx: number) => void;
}) => {
  const winBgColor = useColorModeValue("#81E6D9", "#2C7A7B");
  const regularColor = useColorModeValue("white", "#1A202C");
  const borderColor = useColorModeValue("black", "white");

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
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        border: `solid 1px ${borderColor}`,
        cursor: "pointer",
        backgroundColor: `${squareState.winner ? winBgColor : regularColor}`,
      }}
      onClick={() => handleClick(idx)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
    >
      <Center w="100%" h="100%">
        <Icon height="3rem" icon={displayIcon()} />
      </Center>
    </motion.div>
  );
};

export default Square;
