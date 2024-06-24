import { Link, Text, VStack } from "@chakra-ui/react";
import Bank from "../bank/Bank";

const Projects = () => {
  return (
    <VStack padding={9}>
      <Text color="gray.200" fontSize="2rem" fontFamily="fantasy">TMG Disease Preidictor</Text>
      <p>An android application that predicts the type of disease based on the selected plant category. 
        Based on the disease type, we get the name of the disease, the causative agent, scientific name 
        and the recommended ways for treatment. The symptoms provided as output help us to make sure that 
        the disease predicted is truthy or not. The application even tells us whether the leaf is healthy or not.
        <Link href="https://www.github.com/FabiansDock/tmg-disease-predictor" isExternal>{" "}Review project</Link>
      </p>
      <Text color="gray.200" fontSize="2rem" fontFamily="fantasy">
        My First Blender Model 🤩
      </Text>
      <Bank />
      
    </VStack>
  );
};

export default Projects;
