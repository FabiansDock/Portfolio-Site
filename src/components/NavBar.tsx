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
  useColorMode,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
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
    { id: "About", link: "/" },
    { id: "Projects", link: "/projects" },
    { id: "Resume", link: "/resume" },
    { id: "Certifications", link: "/certifications" },
    { id: "Contact", link: "/contact" },
  ];
  const { colorMode } = useColorMode();
  const [navBarColor, setNavBarColor] = useState(
    colorMode === "dark" ? "#1C4532" : "#1A365D"
  );

  return (
    <HStack justifyContent="space-between" bg={navBarColor}>
      <Image src={logo} boxSize="60px"></Image>
      <HStack>
        {profileTabs.map((tab) => (
          <RouteLink to={tab.link as string}>
            <Link color="cyan" marginEnd="30px">
              {tab.id}
            </Link>{" "}
          </RouteLink>
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
    { id: "Projects", link: "" },
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
