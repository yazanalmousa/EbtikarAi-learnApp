// SimpleSavedCard.jsx
import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SimpleSavedCard = ({ videoSrc, clickOpen }) => {
  return (
    <Box onClick={clickOpen}>
      <AspectRatio ratio={12 / 16}>
        <video src={videoSrc} autoPlay loop muted />
      </AspectRatio>
    </Box>
  );
};

SimpleSavedCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

export default SimpleSavedCard;
