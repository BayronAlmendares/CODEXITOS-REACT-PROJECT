import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../customHooks/useGames";
import GameCard from "./GameCard";
import WhileLoading from "./WhileLoading";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../customHooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletonWhileLoading = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletonWhileLoading.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <WhileLoading />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
