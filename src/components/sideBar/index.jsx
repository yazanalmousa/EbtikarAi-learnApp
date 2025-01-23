import React from "react";
import { Box, IconButton, VStack } from "@chakra-ui/react";
import { FaHeart, FaBookmark } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

const SideBar = ({
  likeClickHandler,
  saveClickHandler,
  shareClickHandler,
  likeState,
  saveState,
}) => {
  return (
    <Box>
      <VStack spacing={{ base: "2rem", md: "3.5rem", lg: "4rem" }}>
        <IconButton
          aria-label="Like"
          fontSize={{ base: "24px", md: "30px", lg: "32px" }}
          icon={<FaHeart />}
          bg={"none"}
          px={{ base: 2, md: 3 }}
          py={{ base: 2, md: 3 }}
          _hover={{ bg: "none" }}
          _active={{ transform: "scale(0.9)" }}
          borderRadius="full"
          onClick={likeClickHandler}
          color={likeState ? "#EA4359" : "white"}
        />
        <IconButton
          aria-label="Bookmark"
          icon={<FaBookmark />}
          fontSize={{ base: "24px", md: "30px", lg: "32px" }}
          bg={"none"}
          px={{ base: 2, md: 3 }}
          py={{ base: 2, md: 3 }}
          _hover={{ bg: "none" }}
          _active={{ transform: "scale(0.9)" }}
          borderRadius="full"
          onClick={saveClickHandler}
          color={saveState ? "#ffbf00" : "white"}
        />
        <IconButton
          aria-label="Share"
          fontSize={{ base: "24px", md: "30px", lg: "32px" }}
          icon={<FaShare />}
          bg={"none"}
          px={{ base: 2, md: 3 }}
          py={{ base: 2, md: 3 }}
          _hover={{ bg: "none" }}
          _active={{ transform: "scale(0.9)" }}
          borderRadius="full"
          onClick={shareClickHandler}
        />
      </VStack>
    </Box>
  );
};

export default SideBar;
