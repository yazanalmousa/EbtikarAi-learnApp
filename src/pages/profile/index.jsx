import React, { useContext } from "react";
import { Flex, Box } from "@chakra-ui/react";
import ProfileLayout from "../../components/layouts/profilePageLayout";
import { AuthContext } from "../../context/AuthContext";
import { useVideoStore } from "../../store/index";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { videos } = useVideoStore();

  const savedVideos = videos.filter((video) => video.saved);
  const likedVideos = videos.filter((video) => video.liked);

  return (
    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="start"
      flexDir={"column"}
      py={"3rem"}
      overflowY={"auto"}
    >
      <Box>
        <ProfileLayout
          data={user}
          likedVideos={likedVideos}
          savedVideos={savedVideos}
        />
      </Box>
    </Flex>
  );
};

export default Profile;
