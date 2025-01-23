import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../theme/index";
import AuthProvider from "../context/AuthContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Providers;
