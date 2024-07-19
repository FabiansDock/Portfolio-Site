import { mosh, nptel } from "../../service";
import { VStack } from "@chakra-ui/react";
import DisplayCertifications from "./CertificationsDisplay";

const Certifications = () => {
  return (
    <VStack spacing={6}>
      <DisplayCertifications title="Mosh" certifications={mosh} />
      <DisplayCertifications title="NPTEL" certifications={nptel} />
    </VStack>
  );
};

export default Certifications;
