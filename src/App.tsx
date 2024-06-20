import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import BigNavBar, { SmallNavBar } from "./components/NavBar";
import Intro from "./components/IntroTextAnimation";
import ProfilePicture from "./components/ProfilePicture";

const App = () => {
  return (
    <Grid templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav''aside main'` }}>
      <Show below="lg">
        <GridItem area="nav">
          <SmallNavBar />
        </GridItem>
        <GridItem area="main">
          <ProfilePicture />
          <Intro />
        </GridItem>
      </Show>
      <Show above="lg">
        <GridItem area="nav">
          <BigNavBar />
        </GridItem>
        <GridItem area="main" margin={9}>
          <HStack>
            <Intro />
            <ProfilePicture />
          </HStack>
        </GridItem>
      </Show>
    </Grid>
  );
};

export default App;
