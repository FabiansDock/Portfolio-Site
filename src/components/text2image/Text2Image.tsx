import { useState } from "react";
import { HfInference } from "@huggingface/inference";
import { Button, HStack, Image, Input } from "@chakra-ui/react";

const TextToImageComponent = () => {
  const inference = new HfInference(process.env.REACT_APP_TEXT2IMAGE_KEY);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [inputText, setInputText] = useState("Messi with Ronaldo");

  const handleTextToImage = async () => {
    console.log("clicked");
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
      }
    } catch (error) {
      console.error("Error during text to image conversion:", error);
      setImageUrl("");
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

  return (
    <>
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
        <Button onClick={handleDownload}>Download</Button>
      </HStack>
      {imageUrl && (
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
