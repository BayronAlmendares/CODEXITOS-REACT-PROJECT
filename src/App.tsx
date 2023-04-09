import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./customHooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./customHooks/useGames";

function App() {
  const [selGenre, setSelGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //for mobile devices
        lg: `"nav nav" " aside main"`, //wider than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={4}>
          <GenreList
            onSelectGenre={(genre) => setSelGenre(genre)}
            selectedGenre={selGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedGenre={selGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
