import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import {
  Box,
  VStack,
  Button,
  Heading,
  Text,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import "@fontsource/krona-one";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  return (
    <Box h="100vh" py={8} px={5} zIndex={1000}>
      <Box w="full" textAlign="center" mb={5}>
        <Heading
          size="lg"
          color="white"
          fontWeight="bold"
          fontFamily="'Krona One', sans-serif"
          display={{ base: "none", md: "block" }}
        >
          LearnSpan
        </Heading>
        <Text
          fontSize="sm"
          color="gray"
          mt={3}
          display={{ base: "none", md: "block" }}
        >
          Learn, grow, and take action every day.
        </Text>
      </Box>

      <Box w="full" mb={7}>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Search"
            icon={<AiOutlineSearch fontSize="22px" />}
            variant="ghost"
            color="rgba(255, 255, 255, 0.9)"
            onClick={() => {}}
            _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
            _active={{ bg: "rgba(255, 255, 255, 0.3)" }}
          />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Button
            leftIcon={<AiOutlineSearch size={24} />}
            justifyContent="flex-start"
            variant="solid"
            bg="none"
            color={
              pathname === "/search" ? "red.500" : "rgba(255, 255, 255, 0.9)"
            }
            fontSize="md"
            w="full"
            _hover={{
              bg: "rgba(255, 255, 255, 0.1)",
              transform: "scale(1.05)",
            }}
            _active={{ bg: "rgba(255, 255, 255, 0.3)" }}
            borderRadius="md"
            onClick={() => navigate("/search")}
            size="md"
          >
            <Box display={{ base: "none", md: "inline" }}>Search</Box>
          </Button>
        </Box>
      </Box>

      <VStack spacing={7} w="full" align="flex-start" mt={5}>
        <Button
          leftIcon={<IoHomeOutline size={24} />}
          justifyContent="flex-start"
          variant="solid"
          bg="none"
          color={pathname === "/home" ? "red.500" : "rgba(255, 255, 255, 0.9)"}
          fontSize="md"
          w="full"
          _hover={{ bg: "rgba(255, 255, 255, 0.1)", transform: "scale(1.05)" }}
          _active={{ bg: "rgba(255, 255, 255, 0.3)" }}
          borderRadius="md"
          onClick={() => navigate("/home")}
          size="md"
        >
          <Box display={{ base: "none", md: "inline" }}>Home</Box>
        </Button>

        <Button
          leftIcon={<MdOutlineBookmarkAdded size={24} />}
          justifyContent="flex-start"
          variant="solid"
          bg="none"
          color={pathname === "/saved" ? "red.500" : "rgba(255, 255, 255, 0.9)"}
          fontSize="md"
          w="full"
          _hover={{ bg: "rgba(255, 255, 255, 0.1)", transform: "scale(1.05)" }}
          _active={{ bg: "rgba(255, 255, 255, 0.3)" }}
          borderRadius="md"
          onClick={() => navigate("/saved")}
          size="md"
        >
          <Box display={{ base: "none", md: "inline" }}>Saved</Box>
        </Button>

        <Button
          leftIcon={<AiOutlineUser size={24} />}
          justifyContent="flex-start"
          variant="solid"
          bg="none"
          color={
            pathname === "/profile" ? "red.500" : "rgba(255, 255, 255, 0.9)"
          }
          fontSize="md"
          w="full"
          _hover={{ bg: "rgba(255, 255, 255, 0.1)", transform: "scale(1.05)" }}
          _active={{ bg: "rgba(255, 255, 255, 0.3)" }}
          borderRadius="md"
          onClick={() => navigate("/profile")}
          size="md"
        >
          <Box display={{ base: "none", md: "inline" }}>Profile</Box>
        </Button>

        <Divider borderColor="gray" mt={5} />

        <Button
          justifyContent={{ sm: "flex-start", md: "center" }}
          variant="solid"
          bg={{ base: "none", md: "red.600" }}
          color="rgba(255, 255, 255, 0.9)"
          fontSize="md"
          w="full"
          _hover={{ bg: "rgba(255, 255, 255, 0.1)", transform: "scale(1.05)" }}
          _active={{ bg: "rgba(255, 255, 255, 0.3)" }}
          borderRadius="3xl"
          leftIcon={<FiLogOut size={24} />}
          size="md"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          <Box display={{ base: "none", md: "inline" }} ml={2}>
            Logout
          </Box>
        </Button>

        <Text color="gray" fontSize="xs" textAlign="center" mt={3}>
          © {new Date().getFullYear()} ActLearn. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Navbar;
