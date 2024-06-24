import {
  Box,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { Link as RouteLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.gif";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import theme from "../theme";

interface ProfileTabSchema {
  id: string;
  link: string;
}

const BigNavBar = () => {
  const profileTabs: ProfileTabSchema[] = [
    { id: "About", link: "/" },
    { id: "Projects", link: "/projects" },
    { id: "Resume", link: "/resume" },
    { id: "Certifications", link: "/certifications" },
    { id: "Socials", link: "/socials" },
  ];

  const { colorMode } = useColorMode();
  const [navBarColor, setNavBarColor] = useState(
    colorMode === "dark" ? "#1C4532" : "#1A365D"
  );

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <HStack justifyContent="space-between" bg={navBarColor}>
      <Image src={logo} boxSize="60px"></Image>
      <HStack>
        {profileTabs.map((tab) => (
          <RouteLink to={tab.link as string} key={tab.id}>
            <Box
              color={
                tab.link === activeLink
                  ? theme.components.Link.baseStyle._hover.color
                  : theme.components.Link.baseStyle.color
              }
              marginEnd="30px"
              onClick={() => setActiveLink(tab.link)}
              _hover={{ color: theme.components.Link.baseStyle._hover.color }}
            >
              {tab.id}
            </Box>{" "}
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
    { id: "Socials", link: "" },
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
              <MenuItem key={tab.id}>
                <RouteLink to={tab.link as string}>
                  <Box color="cyan">{tab.id}</Box>
                </RouteLink>
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
