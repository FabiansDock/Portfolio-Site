import { Switch, useColorMode } from "@chakra-ui/react";

interface Props {
  theme: () => void;
}

const ColorModeSwitch = ({ theme }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  const handleOnChange = () => {
    toggleColorMode();
    theme();
  };
  return (
    <Switch
      colorScheme="cyan"
      isChecked={colorMode === "dark"}
      onChange={handleOnChange}
      marginEnd="20px"
    />
  );
};

export default ColorModeSwitch;
