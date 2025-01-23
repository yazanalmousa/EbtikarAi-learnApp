import React, { useState, useEffect, Suspense, useRef } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import ScrollingButtons from "../../scrollingButtons/index";

const Card = React.lazy(() => import("../../card/index"));

const SavedLayout = ({ videoData }) => {
  const containerRef = useRef(null);
  const [disableUp, setDisableUp] = useState(true);
  const [disableDown, setDisableDown] = useState(false);

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
  }, [videoData]);

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
      <Box
        h="100vh"
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="flex-end"
        px={5}
        position="fixed"
        right={5}
      >
        {videoData.length > 0 && (
          <ScrollingButtons
            onUpClick={handleScrollUp}
            onDownClick={handleScrollDown}
            disableUp={disableUp || videoData.length <= 1}
            disableDown={disableDown || videoData.length <= 1}
          />
        )}
      </Box>

      {videoData.length > 0 ? (
        videoData.map((video, index) => (
          <Box
            key={index}
            scrollSnapAlign="center"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={10}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Card video={video} />
            </Suspense>
          </Box>
        ))
      ) : (
        <Center height="100vh">
          <Text fontSize="xl" color="white">
            You have no saved files.
          </Text>
        </Center>
      )}
    </Box>
  );
};

export default SavedLayout;
