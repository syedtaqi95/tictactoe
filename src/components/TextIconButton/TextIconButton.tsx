import React from "react";
import ScaleTapComponent from "components/ScaleTapComponent";
import { Button, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const TextIconButton = ({
  handleClick,
  text,
  icon,
}: {
  handleClick: () => void;
  text: string;
  icon: string;
}) => {
  return (
    <ScaleTapComponent>
      <Button gap={2} onClick={handleClick}>
        <Text>{text}</Text>
        <Icon inline={true} height="1.4rem" icon={icon} />
      </Button>
    </ScaleTapComponent>
  );
};

export default TextIconButton;
