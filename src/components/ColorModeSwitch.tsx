import { Switch, useColorMode } from "@chakra-ui/react";

interface Props {
  theme: (theme: String) => void;
}

const ColorModeSwitch = ({ theme }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  const handleOnChange = () => {
    toggleColorMode();
    theme(colorMode);
  };

  return (
    <Switch
      colorScheme="cyan"
      isChecked={colorMode === "dark"}
      onChange={handleOnChange}
      marginEnd="20px"
      marginStart="20px"
    />
  );
};

export default ColorModeSwitch;
