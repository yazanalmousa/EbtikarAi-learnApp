import React, { useEffect, useCallback } from "react";
import { Box, Flex } from "@chakra-ui/react";
import HomeLayout from "../../components/layouts/homePageLayout";
import { useVideoStore } from "../../store/index";

const Home = () => {
  const { videos, setVideos } = useVideoStore();

  const fetchVideos = useCallback(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await fetch("/cardData.json");
      if (!response.ok) {
        throw new Error("Failed to fetch video data");
      }
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("Error loading video data:", error);
    }
  }, [setVideos]);

  useEffect(() => {
    if (videos.length > 0) {
      return;
    }
    fetchVideos();
  }, [fetchVideos, videos]);

  return (
    <Flex w="100%" h="100vh" alignItems={"flex-end"}>
      <Box flex={1} overflowY="auto">
        <HomeLayout videoData={videos} />
      </Box>
    </Flex>
  );
};

export default Home;
