import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SavedLayout from "../../components/layouts/savedPageLayout/index";
import { useVideoStore } from "../../store/index";

const Saved = () => {
  const { videos } = useVideoStore();

  const savedVideos = videos.filter((video) => video.saved);

  return (
    <Flex w="100%" h="100vh" alignItems={"flex-end"}>
      <Box flex={1} overflowY="auto">
        <SavedLayout videoData={savedVideos} />
      </Box>

      <Box
        h="100vh"
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="flex-end"
        px={5}
      ></Box>
    </Flex>
  );
};

export default Saved;
