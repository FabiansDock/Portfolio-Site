import { HStack, Image, Link } from "@chakra-ui/react";
import gif from "../assets/f.gif";
import ColorModeSwitch from "./ColorModeSwitch";

interface ProfileTabSchema {
  id: String;
  link: String;
}

const NavBar = () => {
  const profileTabs: ProfileTabSchema[] = [
    { id: "About", link: "" },
    { id: "Portfolio", link: "" },
    { id: "Resume", link: "" },
    { id: "Certifications", link: "" },
    { id: "Contact", link: "" },
  ];

  return (
    <HStack justifyContent="space-between">
      <Image src={gif} boxSize="60px"></Image>
      <HStack>
        {profileTabs.map((tab) => (
          <Link href={tab.link as string} color="cyan" marginEnd="30px">
            {tab.id}
          </Link>
        ))}
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
