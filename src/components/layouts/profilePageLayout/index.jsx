import { Avatar, Box, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import StatBox from "../../StatBox";
import Tabular from "../../tabs";

const ProfileLayout = ({ data, savedVideos, likedVideos }) => {
  return (
    <Box
      p={12}
      borderRadius="2xl"
      boxShadow="2xl"
      textAlign="center"
      w={{ base: "95%", md: "900px", lg: "900px" }}
      // h={{ base: "auto", md: "700px", lg: "750px" }}
      color="white"
      overflowY={"auto"}
    >
      <VStack spacing={6}>
        <Avatar size="3xl" name={data.name} src={data.avatarUrl} />

        <Box>
          <Text fontSize="3xl" fontWeight="bold">
            {data.name}
          </Text>

          <Text fontSize="md" fontWeight="thin">
            {data.userName}
          </Text>
        </Box>

        <HStack spacing={16} justify="center" mt={6}>
          <StatBox
            label="Followers"
            count={data.followersCount}
            fontSize="2xl"
          />
          <StatBox
            label="Following"
            count={data.followingCount}
            fontSize="2xl"
          />
          <StatBox label="Likes" count={data.likesCount} fontSize="2xl" />
        </HStack>

        <Box w="100%">
          <Tabular savedData={savedVideos} LikedData={likedVideos} />
        </Box>
      </VStack>
    </Box>
  );
};

export default ProfileLayout;
