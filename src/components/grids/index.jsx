import React, { useState } from "react";
import { SimpleGrid, Center, Text, useDisclosure } from "@chakra-ui/react";
import SimpleSavedCard from "../card/savedVideoCard/index";
import VideosDialouge from "../dialouges/index";

const CardGrids = ({ videos }) => {
  const [videoToShow, setVideoToShow] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenDialogue = (video) => {
    setVideoToShow(video);
    onOpen();
  };

  if (videos.length === 0) {
    return (
      <Center>
        <Text fontSize="xl" color="white">
          You have no saved files.
        </Text>
      </Center>
    );
  }

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={4}
        overflow={"visible"}
      >
        {videos.map((video, index) => (
          <div key={video.id || index}>
            <SimpleSavedCard
              videoSrc={video.videoSrc}
              clickOpen={() => handleOpenDialogue(video)}
            />
          </div>
        ))}
      </SimpleGrid>

      {videoToShow && (
        <VideosDialouge isOpen={isOpen} onClose={onClose} video={videoToShow} />
      )}
    </>
  );
};

export default CardGrids;
