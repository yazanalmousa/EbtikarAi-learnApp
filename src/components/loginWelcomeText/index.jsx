import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import introductionTexts from "../../locals/index";
import useMousePosition from "../../utils/useMousePosition";

const MotionBox = motion(Box);

const WelcomeText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 150 : 40;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % introductionTexts.length
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      className="main"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <motion.div
        className="mask"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "#FF3B5C",
          WebkitMaskImage: "url('/mask.svg')",
          WebkitMaskRepeat: "no-repeat",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      <Box
        className="body"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#afa18f",
          fontSize: "64px",
          lineHeight: "normal",
          cursor: "default",
          position: "relative",
          zIndex: 1,
        }}
      >
        <MotionBox
          borderRadius="lg"
          minW="400px"
          maxW="600px"
          textAlign="start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          key={currentIndex}
          gap={0}
          p={4}
        >
          <Box
            lineHeight="1.4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Heading as="h2" size="2xl" mb={3} lineHeight="1.2" color={"white"}>
              {introductionTexts[currentIndex].heading}
            </Heading>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              mb={4}
              lineHeight="1.4"
              color={"rgba(255, 255, 255, 0.5)"}
            >
              {introductionTexts[currentIndex].subheading}
            </Text>
            <Text
              fontSize="sm"
              lineHeight="1.6"
              color={"rgba(255, 255, 255, 0.5)"}
            >
              {introductionTexts[currentIndex].description}
            </Text>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default WelcomeText;
