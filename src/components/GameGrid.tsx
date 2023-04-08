import { useEffect, useState } from "react";
import apiClient from "../servicesApi/api-client";
import { Text } from "@chakra-ui/react";

interface gameArray {
  id: number;
  name: string;
}
interface fetchDataResponse {
  count: number;
  results: gameArray[];
}

export const GameGrid = () => {
  const [games, setGames] = useState<gameArray[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<fetchDataResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
