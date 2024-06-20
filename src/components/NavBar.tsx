import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import logo from "../assets/logo.gif";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface ProfileTabSchema {
  id: String;
  link: String;
}

const BigNavBar = () => {
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
      <Image src={logo} boxSize="60px"></Image>
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

export const SmallNavBar = () => {
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
      <Image src={logo} boxSize="60px" />

      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />} />
          <MenuList>
            {profileTabs.map((tab) => (
              <MenuItem>
                <Link href={tab.link as string} color="cyan">
                  {tab.id}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <ColorModeSwitch
          theme={(theme) => {
            setNavBarColor(theme === "dark" ? "#1A365D" : "#1C4532");
          }}
        />
      </Box>
    </HStack>
  );
};

export default BigNavBar;
