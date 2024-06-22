import { useState } from "react";
import certificationsFiles from "../service";
import { Button, HStack, Image } from "@chakra-ui/react";

const Certifications = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <HStack>
        <Button
          isDisabled={activeImage === 0}
          onClick={() => setActiveImage(activeImage - 1)}
        >
          {"<"}
        </Button>
        <Image
          flex={0.7}
          src={certificationsFiles[activeImage]}
          boxSize="50%"
        />
        <Button
          isDisabled={activeImage === certificationsFiles.length - 1}
          onClick={() => setActiveImage(activeImage + 1)}
        >
          {">"}
        </Button>
      </HStack>
    </>
  );
};

export default Certifications;
