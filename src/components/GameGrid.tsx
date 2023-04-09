import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../customHooks/useGames";
import GameCard from "./GameCard";
import WhileLoading from "./WhileLoading";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletonWhileLoading = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing="10"
      >
        {isLoading &&
          skeletonWhileLoading.map((skeleton) => (
            <WhileLoading key={skeleton} />
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
