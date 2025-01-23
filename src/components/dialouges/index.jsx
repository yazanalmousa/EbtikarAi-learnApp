import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
} from "@chakra-ui/react";
import Card from "../card/index";

const VideosDialouge = ({ video, onClose, isOpen }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay bg="black" />
      <ModalContent bg="none" onClick={onclose} p={0} w={"fit-content"}>
        <ModalBody>
          <Box onClick={(e) => e.stopPropagation()} p={0}>
            {video && <Card video={video} />}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VideosDialouge;
