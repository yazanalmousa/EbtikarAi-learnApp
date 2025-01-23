import { Box, IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollingButtons = ({
  onUpClick,
  onDownClick,
  disableUp,
  disableDown,
}) => {
  return (
    <Box>
      <VStack justifyContent={"center"} spacing={5}>
        <IconButton
          icon={<FaArrowUp />}
          aria-label="up-arrow"
          bg={"#2E2E2E"}
          _hover={{ bg: "#4A4A4A" }}
          _active={{ bg: "#5A5A5A" }}
          transition="all 0.2s ease-in-out"
          onClick={onUpClick}
          isDisabled={disableUp}
        />
        <IconButton
          icon={<FaArrowDown />}
          aria-label="down-arrow"
          bg={"#2E2E2E"}
          _hover={{ bg: "#4A4A4A" }}
          _active={{ bg: "#5A5A5A" }}
          transition="all 0.2s ease-in-out"
          onClick={onDownClick}
          isDisabled={disableDown}
        />
      </VStack>
    </Box>
  );
};

export default ScrollingButtons;
