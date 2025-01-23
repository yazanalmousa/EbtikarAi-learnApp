import { VStack, Text } from "@chakra-ui/react";

const StatBox = ({ label, count }) => (
  <VStack>
    <Text fontSize="lg" fontWeight="bold">
      {count}
    </Text>
    <Text fontSize="sm" color="gray">
      {label}
    </Text>
  </VStack>
);

export default StatBox;
