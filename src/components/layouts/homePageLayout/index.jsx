import React, { useState, useEffect, Suspense, useRef } from "react";
import { Box, Center, Spinner } from "@chakra-ui/react";
import ScrollingButtons from "../../scrollingButtons/index";

const Card = React.lazy(() => import("../../card/index"));

const HomeLayout = ({ videoData }) => {
  const [videos, setVideos] = useState([]);
  const containerRef = useRef(null);
  const [disableUp, setDisableUp] = useState(true);
  const [disableDown, setDisableDown] = useState(false);

  useEffect(() => {
    if (videoData.length > 0) {
      setVideos(videoData);
    }
  }, [videoData]);

  useEffect(() => {
    const updateButtonStates = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

        setDisableUp(scrollTop === 0);

        setDisableDown(scrollTop + clientHeight >= scrollHeight - 5);
      }
    };

    const scrollContainer = containerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateButtonStates);
      updateButtonStates();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateButtonStates);
      }
    };
  }, [videos]);

  const handleScrollUp = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: -window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const handleScrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      ref={containerRef}
      overflowY="scroll"
      maxH="100vh"
      h="100vh"
      px={4}
      scrollSnapType="y mandatory"
      sx={{
        WebkitScrollSnapType: "y mandatory",
      }}
    >
      {/* Scrolling Buttons */}
      <Box
        h="100vh"
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="flex-end"
        px={5}
        position="fixed"
        right={5}
      >
        <ScrollingButtons
          onUpClick={handleScrollUp}
          onDownClick={handleScrollDown}
          disableUp={disableUp}
          disableDown={disableDown}
        />
      </Box>

      {videos.length > 0 ? (
        videos.map((video, index) => (
          <Box
            key={index}
            scrollSnapAlign="center"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={10}
          >
            <Suspense fallback={<Spinner size="lg" color="red.500" />}>
              <Card video={video} />
            </Suspense>
          </Box>
        ))
      ) : (
        <Center py={4}>
          <Spinner size="lg" thickness="4px" speed="0.65s" color="red.500" />
        </Center>
      )}
    </Box>
  );
};

export default HomeLayout;
