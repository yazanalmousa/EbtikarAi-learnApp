import { Box } from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/index";
import Profile from "./pages/profile/index";
import Saved from "./pages/saved/index";
import Navbar from "./components/navigationBar/index";
import Login from "./pages/login/index";
import PrivateRoute from "./components/privateRoute";
import Search from "./pages/search/index";

function App() {
  const { pathname } = useLocation();

  return (
    <Box display="flex">
      {pathname !== "/" && (
        <Box flex="1" maxW="18%" position="fixed" left={0}>
          <Navbar />
        </Box>
      )}

      <Box flex="1" ml={pathname !== "/" ? "18%" : "0"}>
        <Routes>
          <Route index element={<Login />} />
          <Route path="home" element={<PrivateRoute element={<Home />} />} />
          <Route
            path="profile"
            element={<PrivateRoute element={<Profile />} />}
          />
          <Route path="saved" element={<PrivateRoute element={<Saved />} />} />
          <Route
            path="search"
            element={<PrivateRoute element={<Search />} />}
          />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
