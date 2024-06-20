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
  },
});

export default theme;
