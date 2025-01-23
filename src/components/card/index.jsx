import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  AspectRatio,
  Text,
  Progress,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import SideBar from "../sideBar/index";
import { useInView } from "react-intersection-observer";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import { useVideoStore } from "../../store/index";

const Card = ({ video }) => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isWatched, setIsWatched] = useState(false);
  const { videos, modifyVideoDetails } = useVideoStore();

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      if (isPlaying) {
        video.play().catch((err) => console.log(err));
        setIsMuted(false);
      }
    } else {
      video.pause();
    }
  }, [inView, isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch((err) => console.log(err));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      if (video.paused) {
        video.play().catch((err) => console.log(err));
      }
    } else {
      video.muted = true;
    }
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);

      if (percent >= 95) {
        setTimeout(() => {
          setIsWatched(true);
        }, 1000);
      }
    }
  };

  const likeButtonHandler = () => {
    const existingVideo = videos.find((v) => v.id === video.id);
    if (!existingVideo) return;
    const updatedLikedStatus = !existingVideo.liked;

    modifyVideoDetails(video.id, { liked: updatedLikedStatus });

  };

  const saveButtonHandler = () => {
    const existingVideo = videos.find((v) => v.id === video.id);
    if (!existingVideo) return;

    const updatedSavedStatus = !existingVideo.saved;

    modifyVideoDetails(video.id, { saved: updatedSavedStatus });

  };

  return (
    <Flex ref={ref} justify="center" align="center" w="full">
      <Box
        position="relative"
        w={{ base: "55vw", sm: "80vw", md: "35rem" }}
        maxW="100%"
        borderRadius="lg"
        overflow="hidden"
        h="full"
      >
        <Box onClick={togglePlay} cursor="pointer" position="relative">
          <AspectRatio ratio={12 / 16}>
            <video
              ref={videoRef}
              src={video.videoSrc}
              autoPlay
              loop
              playsInline
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              style={{ objectFit: "cover" }}
            />
          </AspectRatio>
        </Box>

        <Progress
          value={progress}
          size="xs"
          colorScheme={isWatched ? "green" : undefined}
          position="absolute"
          bottom="0"
          left="0"
          w="full"
          zIndex={10}
          sx={{
            "& > div": {
              backgroundColor: isWatched ? "green.500" : "#EE1D52",
            },
          }}
        />

        <Box
          p={3}
          bgGradient="linear(to-b, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))"
          color="white"
          position="absolute"
          bottom="0"
          w="full"
        >
          <Text fontSize="lg" fontWeight="bold">
            {video.title}
          </Text>
          <Text fontSize="sm" noOfLines={2}>
            {video.description}
          </Text>
        </Box>

        <Box position="absolute" top="10px" right="10px" zIndex={20}>
          <IconButton
            bg={"rgba(0,0,0,0.2)"}
            size="sm"
            onClick={toggleMute}
            _hover={{ bg: "rgba(0,0,0,0.4)" }}
            fontSize={"22px"}
            icon={isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          />
        </Box>
      </Box>

      <Box
        position="relative"
        top="15rem"
        left="2"
        transform="translateY(-50%)"
        zIndex={100}
        display="flex"
        flexDirection="column"
        h="100%"
        justifyContent="flex-end"
      >
        <SideBar
          likeState={video.liked}
          saveState={video.saved}
          likeClickHandler={likeButtonHandler}
          saveClickHandler={saveButtonHandler}
          shareClickHandler={() => {}}
        />
      </Box>
    </Flex>
  );
};

export default Card;
