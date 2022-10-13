import React from "react";
import ScaleTapComponent from "components/ScaleTapComponent";
import { Button, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const TextIconButton = ({
  handleClick,
  text,
  icon,
  display,
}: {
  handleClick: () => void;
  text: string;
  icon: string;
  display: boolean;
}) => {
  return display ? (
    <ScaleTapComponent>
      <Button gap={2} onClick={handleClick}>
        <Text>{text}</Text>
        <Icon inline={true} height="1.4rem" icon={icon} />
      </Button>
    </ScaleTapComponent>
  ) : null;
};

export default TextIconButton;
