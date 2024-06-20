import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Switch
      colorScheme="yellow"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
      marginEnd="20px"
    />
  );
};

export default ColorModeSwitch;
