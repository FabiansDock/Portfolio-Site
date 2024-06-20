import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import IntroTextAnimation from "./components/IntroTextAnimation";
import { useState } from "react";

const App = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <Grid templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav''aside main'` }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <IntroTextAnimation
          message="Hi👋, I'm Fabian."
          typingComplete={() => setIsTypingComplete(true)}
        />
        {isTypingComplete && (
          <IntroTextAnimation
            message="Welcome."
            typingComplete={() => setIsTypingComplete(true)}
          />
        )}
      </GridItem>
    </Grid>
  );
};

export default App;
