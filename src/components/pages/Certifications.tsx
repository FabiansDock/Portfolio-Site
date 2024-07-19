import { useState } from "react";
import { certificationsFiles, nptel } from "../service";
import {
  Button,
  HStack,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Certifications = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeNptelImage, setActiveNptelImage] = useState(0);
  const breakpoint = useBreakpointValue({ base: "base", lg: "lg" });

  return (
    <VStack spacing={6}>
      <Text color="gray.200" fontSize="3rem" fontFamily="fantasy">
        Certifications
      </Text>
      <HStack>
        <Button
          isDisabled={activeImage === 0}
          onClick={() => setActiveImage(activeImage - 1)}
        >
          {"<"}
        </Button>
        <Image
          src={certificationsFiles[activeImage]}
          boxSize={breakpoint === "lg" ? "30rem" : "15rem"}
          objectFit="contain"
        />
        <Button
          isDisabled={activeImage === certificationsFiles.length - 1}
          onClick={() => setActiveImage(activeImage + 1)}
        >
          {">"}
        </Button>
      </HStack>

      <Text color="gray.200" fontSize="3rem" fontFamily="fantasy">
        NPTEL
      </Text>
      <HStack>
        <Button
          isDisabled={activeNptelImage === 0}
          onClick={() => setActiveNptelImage(activeNptelImage - 1)}
        >
          {"<"}
        </Button>
        <Image
          src={nptel[activeNptelImage]}
          boxSize={breakpoint === "lg" ? "30rem" : "15rem"}
          objectFit="contain"
        />
        <Button
          isDisabled={activeNptelImage === nptel.length - 1}
          onClick={() => setActiveNptelImage(activeNptelImage + 1)}
        >
          {">"}
        </Button>
      </HStack>
    </VStack>
  );
};

export default Certifications;
