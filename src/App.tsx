import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import BigNavBar, { SmallNavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Grid templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav''aside main'` }}>
      <Show below="lg">
        <GridItem area="nav">
          <SmallNavBar />
        </GridItem>
        <GridItem area="main">
          <Outlet />
        </GridItem>
      </Show>
      <Show above="lg">
        <GridItem area="nav">
          <BigNavBar />
        </GridItem>
        <GridItem area="main" margin={9} paddingEnd="4rem">
          <HStack>
            <Outlet />
          </HStack>
        </GridItem>
      </Show>
    </Grid>
  );
};

export default App;
