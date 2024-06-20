import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Link: {
      baseStyle: {
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
          color: "yellow",
        },
      },
    },
  },
  colors: {
    white: "#C53030",
    light: {
      50: "#ffe1e1",
      100: "#ffb1b1",
      200: "#ff7f7f",
      300: "#ff4c4c",
      400: "#ff1a1a",
      500: "#e60000",
      600: "#b40000",
      700: "#810000",
      800: "#500000",
      900: "#210000",
    },
    alphas: {
      50: "#ffe1e1",
      100: "#ffb1b1",
      200: "#ff7f7f",
      300: "#ff4c4c",
      400: "#ff1a1a",
      500: "#e60000",
      600: "#b40000",
      700: "#810000",
      800: "#500000",
      900: "#210000",
    },
  },
});

export default theme;
