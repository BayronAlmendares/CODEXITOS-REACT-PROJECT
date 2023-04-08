import { useEffect, useState } from "react";
import apiClient from "../servicesApi/api-client";
import { CanceledError } from "axios";

interface gameArray {
  id: number;
  name: string;
}
interface fetchDataResponse {
  count: number;
  results: gameArray[];
}

const useGames = () => {
  const [games, setGames] = useState<gameArray[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<fetchDataResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
