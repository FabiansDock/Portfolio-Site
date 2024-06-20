import { HStack, Image, Text } from "@chakra-ui/react";
import gif from "../assets/f.gif";

const NavBar = () => {
  return (
    <HStack>
      <Image src={gif} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
