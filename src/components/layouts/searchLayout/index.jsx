import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import CardGrids from "../../grids/index";
import useDebounce from "../../../hooks/debounce/index";

const SearchLayout = ({ videos }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [searchResult, setSearchResult] = useState(videos);

  useEffect(() => {
    const result = videos.filter(
      (video) =>
        video.title
          .toLowerCase()
          .includes(debouncedSearchQuery.toLowerCase()) ||
        video.category
          .toLowerCase()
          .includes(debouncedSearchQuery.toLowerCase())
    );

    console.log("searchResult:", result);
    setSearchResult(result);
  }, [searchQuery, debouncedSearchQuery, videos]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      minHeight="100vh"
      p={6}
      w="100%"
    >
      <Box w="100%" maxW="700px" mb={6} p={4} borderRadius="3xl">
        <InputGroup flex="1">
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch color="gray" fontSize="22px" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search videos by name or category..."
            variant="filled"
            bg="rgba(255, 255, 255, 0.12)"
            color="rgba(255, 255, 255, 0.9)"
            _placeholder={{ color: "gray" }}
            _selected={{ bg: "rgba(255, 255, 255, 0.12)" }}
            size="md"
            _hover={{ bg: "rgba(255, 255, 255, 0.12)" }}
            borderRadius="3xl"
            focusBorderColor="red.500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            px={4}
            py={3}
          />
        </InputGroup>
      </Box>

      <Box w="100%" maxW="900px" p={4} >
        {searchResult.length > 0 ? (
          <CardGrids videos={searchResult} />
        ) : (
          <Text
            mt={6}
            fontSize="sm"
            fontWeight="medium"
            textAlign="center"
            color="gray"
          >
            No videos found. Try a different search term.
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default SearchLayout;
