import React from "react";
import ScaleTapComponent from "components/ScaleTapComponent";
import { Button, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const ResetButton = ({ handleResetGame }: { handleResetGame: () => void }) => {
  return (
    <ScaleTapComponent>
      <Button gap={2} onClick={handleResetGame}>
        <Text>Reset Game </Text>
        <Icon inline={true} height="1.4rem" icon="system-uicons:reset" />
      </Button>
    </ScaleTapComponent>
  );
};

export default ResetButton;
