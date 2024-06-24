import { Grid, GridItem, Show } from "@chakra-ui/react";
import BigNavBar, { SmallNavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Grid templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav''main main'` }}>
      <Show below="lg">
        <GridItem area="nav" >
          <SmallNavBar />
        </GridItem>
        <GridItem area="main">
          <Outlet />
        </GridItem>
      </Show>
      <Show above="lg">
        <GridItem area="nav" >
          <BigNavBar />
        </GridItem>
        <GridItem area="main">
            <Outlet />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default App;
