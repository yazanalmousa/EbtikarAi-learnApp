import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Button,
  VStack,
  Text,
  Heading,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import WelcomeText from "../../components/loginWelcomeText/index";
import { useFormik } from "formik";
import { SignInSchema } from "../../schemas/loginSchema/index";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const result = SignInSchema.safeParse(values);
      if (!result.success) {
        const errors = {};
        result.error.issues.forEach((issue) => {
          errors[issue.path[0]] = issue.message;
        });
        return errors;
      }
      return {};
    },
    onSubmit: (values, { setSubmitting }) => {
      const result = login(values.username, values.password);
      if (result.success) {
        toast({
          title: "Welcome Back!",
          description: "Login successful.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/home");
      } else {
        toast({
          title: "Login Failed",
          description: result.message || "Invalid username or password.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      setSubmitting(false);
    },
  });

  return (
    <Flex w="100vw" h="100vh">
      <Flex
        flex="1"
        alignItems="center"
        justifyContent="center"
        p={6}
        display={{ base: "none", md: "flex" }}
      >
        <WelcomeText />
      </Flex>

      <Flex
        flex="1"
        alignItems="center"
        justifyContent="center"
        p={{ base: 6, md: 12 }}
        h="100vh"
      >
        <Box
          w="100%"
          maxW="500px"
          textAlign="center"
          p={8}
          borderRadius="lg"
          bg={"transparent"}
          boxShadow="2xl"
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: "scale(1.02)" }}
        >
          <Heading size="xl" mb={6} textAlign={"start"} color="white">
            Welcome Back
          </Heading>

          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={5}>
              <Input
                placeholder="Ebtikar Email"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="filled"
                focusBorderColor="brand.400"
                borderColor={"gray"}
                bg={"none"}
                _hover={{ bg: "none" }}
                _placeholder={{
                  color: "gray",
                }}
              />

              <InputGroup>
                <Input
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="filled"
                  focusBorderColor="brand.400"
                  borderColor={"gray"}
                  bg={"none"}
                  _hover={{ bg: "none" }}
                  _placeholder={{
                    color: "gray",
                  }}
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Toggle password visibility"
                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    bg="transparent"
                    _hover={{ bg: "gray" }}
                    color="black"
                  />
                </InputRightElement>
              </InputGroup>

              <Button
                type="submit"
                bg={"#FF3B5C"}
                w="full"
                size="md"
                isLoading={formik.isSubmitting}
                _hover={{ bg: "brand.500", transform: "scale(1.05)" }}
                transition="0.2s ease-in-out"
                borderRadius={"2px"}
              >
                Login
              </Button>
              <Box w={"100%"}>
                {formik.touched.username && formik.errors.username && (
                  <Text color="red.400" textAlign={"start"} fontSize={"sm"}>
                    {formik.errors.username}
                  </Text>
                )}
                {formik.touched.password && formik.errors.password && (
                  <Text color="red.400" textAlign={"start"} fontSize={"sm"}>
                    {formik.errors.password}
                  </Text>
                )}
              </Box>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
