import { useState } from "react";
import certificationsFiles from "../service";
import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";

const Certifications = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <VStack>
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
          boxSize="30rem"
          objectFit="contain"
        />
        <Button
          isDisabled={activeImage === certificationsFiles.length - 1}
          onClick={() => setActiveImage(activeImage + 1)}
        >
          {">"}
        </Button>
      </HStack>
    </VStack>
  );
};

export default Certifications;
