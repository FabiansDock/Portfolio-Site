import { HStack } from "@chakra-ui/react";
import Intro from "../IntroTextAnimation";
import ProfilePicture from "../ProfilePicture";
import ModelViewer from "../laptop/LaptopModel.tsx";

interface Props {
  screen: "lg" | "base";
}

const AboutPage = ({ screen }: Props) => {
  if (screen === "lg")
    return (
      <HStack margin={6}>
        <ModelViewer />
        <Intro />
        <ProfilePicture />
      </HStack>
    );
  return (
    <HStack>
      <ProfilePicture />
      <Intro />
    </HStack>
  );
};

export default AboutPage;
