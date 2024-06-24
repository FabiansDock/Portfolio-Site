import { Button, Image, Text, VStack } from "@chakra-ui/react";
import resume from "../../assets/resume.png";
import resumePdf from "../../assets/downloads/Resume.pdf";
import latexCode from "../../assets/downloads/latexCode.txt";

interface Downloads {
  target: string;
  name: string;
}

const Resume = () => {
  const downloads: Downloads[] = [
    { target: resumePdf, name: "Resume.pdf" },
    { target: latexCode, name: "latexCode.tex" },
  ];

  const handleDownload = async (index: number) => {
    const response = await fetch(downloads[index].target);
    const blobPdf = await response.arrayBuffer();
    const url = window.URL.createObjectURL(new Blob([blobPdf]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", downloads[index].name);
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <VStack spacing={6} marginBottom="3rem">
      <Text color="gray.200" fontSize="3rem" fontFamily="fantasy">
        Resume
      </Text>
      <Image src={resume} style={{ boxShadow: "0 0 19px rgb(22, 204, 137)" }} />
      <Button onClick={() => handleDownload(0)} bgColor="gray.300">
        Download Resume
      </Button>
      <Text fontSize="1rem" color="cyan" fontWeight="bold">
        A hyperlinked resume built using LaTex ✨
      </Text>
      <Button onClick={() => handleDownload(1)} bgColor="gray.300">
        Download LaTex code
      </Button>
    </VStack>
  );
};

export default Resume;
