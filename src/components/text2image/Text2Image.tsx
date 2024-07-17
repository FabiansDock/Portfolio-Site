import { useState } from "react";
import { HfInference } from "@huggingface/inference";
import { Button, HStack, Image, Input, Text } from "@chakra-ui/react";

const TextToImageComponent = () => {
  const inference = new HfInference(process.env.REACT_APP_TEXT2IMAGE_KEY);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [inputText, setInputText] = useState("Messi with Ronaldo");

  const handleTextToImage = async () => {
    try {
      const blobResult = await inference.textToImage({
        model: "stabilityai/stable-diffusion-2",
        inputs: inputText,
      });
      if (blobResult instanceof Blob) {
        const imageUrl = URL.createObjectURL(blobResult);
        setImageUrl(imageUrl);
      } else {
        console.error(
          "Error: Expected Blob object from API, but received:",
          blobResult
        );
        setImageUrl("ERROR");
      }
    } catch (error) {
      console.error("Error during text to image conversion:", error);
      setImageUrl("ERROR");
    }
  };

  const handleDownload = async () => {
    const url = imageUrl;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", inputText);
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  handleTextToImage();
  return (
    <>
      {imageUrl === "ERROR" && (
        <Text color="gray.300" fontWeight="bold">
          Number of requests exceeded 😞. Check again next time.
        </Text>
      )}
      <Input
        style={{
          maxWidth: "30%",
        }}
        placeholder="Enter text for image generation"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <HStack>
        <Button onClick={handleTextToImage}>Generate</Button>
        <Button
          onClick={handleDownload}
          isDisabled={imageUrl === "" || imageUrl === "ERROR" ? true : false}
        >
          Download
        </Button>
      </HStack>
      {imageUrl && imageUrl !== "ERROR" && (
        <Image
          style={{
            maxHeight: "3%",
            maxWidth: "30%",
            objectFit: "cover",
          }}
          src={imageUrl}
          alt="Generated Image"
        />
      )}
    </>
  );
};

export default TextToImageComponent;
