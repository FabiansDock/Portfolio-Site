import {
  Box,
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <VStack spacing={6}>
      <Text fontSize="2rem" color="cyan" fontWeight="bold">
        Contact
      </Text>
      <Card borderColor="gray.500" borderWidth={1}>
        <CardBody boxSize="20rem">
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                display="flex"
                justifyContent="space-between"
              >
                Github <FaGithub size="2rem" />
              </Heading>
              <Text pt="2" fontSize="sm" color="gray.100">
                <Link href={"https://www.github.com/FabiansDock"} isExternal>
                  FabiansDock
                </Link>
              </Text>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                display="flex"
                justifyContent="space-between"
              >
                Linkedin <FaLinkedin size="2rem" color="#0077B5" />
              </Heading>
              <Text pt="2" fontSize="sm" color="gray.100">
                <Link
                  href={"https://www.linkedin.com/in/fabian-savio-dcruz-"}
                  isExternal
                >
                  fabian-savio-dcruz-
                </Link>
              </Text>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                display="flex"
                justifyContent="space-between"
              >
                Gmail <SiGmail size="2rem" />
              </Heading>
              <Text pt="2" fontSize="sm" color="gray.100">
                fabian20122001@gmail.com
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </VStack>
  );
};

export default Contact;
