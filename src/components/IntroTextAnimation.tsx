import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

interface Props {
  message: String;
  typingComplete: () => void;
  textColor: string;
  fontSize: string;
}

const IntroTextAnimation = ({ message, typingComplete, textColor, fontSize }: Props) => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const sentence = message;
    let index = 1;

    const typingInterval = setInterval(() => {
      if (index <= sentence.length) {
        setDisplayText(sentence.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        typingComplete();
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        paddingTop: fontSize,
      }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          fontSize: fontSize,
          textAlign: "center",
          fontWeight: "bolder",
          color: textColor,
        }}
      >
        {displayText}
      </motion.h1>
      {!isTypingComplete && (
        <motion.span
          className="cursor"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.8 }}
          style={{ fontSize: fontSize, fontWeight: "bolder", color: textColor }}
        >
          |
        </motion.span>
      )}
    </div>
  );
};

const Intro = ({fontSize}: {fontSize: string}) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <Box flex={1} whiteSpace="nowrap">
      <IntroTextAnimation
        message="Hi👋, I'm Fabian."
        typingComplete={() => setIsTypingComplete(true)}
        textColor="white"
        fontSize={fontSize}
      />
      {isTypingComplete && (
        <IntroTextAnimation
          message="A Software Developer."
          typingComplete={() => setIsTypingComplete(true)}
          textColor="#63B3ED"
          fontSize={fontSize}
        />
      )}
    </Box>
  );
};

export default Intro;
