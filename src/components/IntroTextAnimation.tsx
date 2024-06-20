import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

interface Props {
  message: String;
  typingComplete: () => void;
  textColor: string;
}

const IntroTextAnimation = ({ message, typingComplete, textColor }: Props) => {
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
        paddingTop: "2rem",
      }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          fontSize: "2rem",
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
          style={{ fontSize: "2rem", fontWeight: "bolder", color: textColor }}
        >
          |
        </motion.span>
      )}
    </div>
  );
};

const Intro = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <Box flex={1} whiteSpace="nowrap">
      <IntroTextAnimation
        message="Hi👋, I'm Fabian."
        typingComplete={() => setIsTypingComplete(true)}
        textColor="white"
      />
      {isTypingComplete && (
        <IntroTextAnimation
          message="A Full Stack Developer."
          typingComplete={() => setIsTypingComplete(true)}
          textColor="#63B3ED"
        />
      )}
    </Box>
  );
};

export default Intro;
