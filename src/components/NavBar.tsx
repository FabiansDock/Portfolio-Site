import { HStack, Image } from "@chakra-ui/react";
import gif from "../assets/f.gif";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={gif} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
