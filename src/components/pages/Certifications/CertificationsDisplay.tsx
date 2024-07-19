import {
  useBreakpointValue,
  VStack,
  HStack,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  title: string;
  certifications: string[];
}

const DisplayCertifications = ({ title, certifications }: Props) => {
  const [activeImage, setActiveImage] = useState(0);
  const breakpoint = useBreakpointValue({ base: "base", lg: "lg" });

  return (
    <VStack spacing={6}>
      <Text color="gray.200" fontSize="3rem" fontFamily="fantasy">
        {title}
      </Text>
      <HStack>
        <Button
          isDisabled={activeImage === 0}
          onClick={() => setActiveImage(activeImage - 1)}
        >
          {"<"}
        </Button>
        <Image
          src={certifications[activeImage]}
          boxSize={breakpoint === "lg" ? "30rem" : "15rem"}
          objectFit="contain"
        />
        <Button
          isDisabled={activeImage === certifications.length - 1}
          onClick={() => setActiveImage(activeImage + 1)}
        >
          {">"}
        </Button>
      </HStack>
    </VStack>
  );
};

export default DisplayCertifications;
