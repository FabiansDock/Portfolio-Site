import { HStack, Image, Link } from "@chakra-ui/react";
import gif from "../assets/f.gif";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";

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
  const [navBarColor, setNavBarColor] = useState("#1C4532");

  return (
    <HStack justifyContent="space-between" bg={navBarColor}>
      <Image src={gif} boxSize="60px"></Image>
      <HStack>
        {profileTabs.map((tab) => (
          <Link href={tab.link as string} color="cyan" marginEnd="30px">
            {tab.id}
          </Link>
        ))}
        <ColorModeSwitch
          theme={(theme) => {
            setNavBarColor(theme === "dark" ? "#1A365D" : "#1C4532");
          }}
        />
      </HStack>
    </HStack>
  );
};

export default NavBar;
