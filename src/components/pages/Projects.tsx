import { Box, Text, VStack } from "@chakra-ui/react";
import Bank from "../Bank";

const Projects = () => {
  return (
    <VStack marginEnd={9}>
      <Text color="gray.200" fontSize="3rem" fontFamily="fantasy">
        My first Blender Model
      </Text>
      <Bank />
    </VStack>
  );
};

export default Projects;
