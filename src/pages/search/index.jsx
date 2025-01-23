import React from "react";
import SearchLayout from "../../components/layouts/searchLayout/index";
import { Box } from "@chakra-ui/react";
import { useVideoStore } from "../../store/index";

const Search = () => {
  const { videos } = useVideoStore();

  return (
    <Box h={"100vh"} overflowY={"scroll"}>
      <SearchLayout videos={videos} />
    </Box>
  );
};

export default Search;
