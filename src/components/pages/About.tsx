import { HStack, VStack, useBreakpointValue } from "@chakra-ui/react";
import Intro from "../IntroTextAnimation";
import ProfilePicture from "../ProfilePicture";
import ModelViewer from "../laptop/LaptopModel.tsx";

const AboutPage = () => {
  const breakpoint = useBreakpointValue({base: "base", lg: "lg"});
  
  if (breakpoint === "lg")
    return (
      <HStack margin={6}>
        <ModelViewer />
        <Intro fontSize="2rem"/>
        <ProfilePicture width={300} height={300} />
      </HStack>
    );
  return (
    <VStack>
      <ProfilePicture width={150} height={150}/>
      <Intro fontSize="1rem"/>
    </VStack>
  );
};

export default AboutPage;
