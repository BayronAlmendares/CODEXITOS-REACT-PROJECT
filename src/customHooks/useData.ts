import { useEffect, useState } from "react";
import apiClient from "../servicesApi/api-client";
import { CanceledError } from "axios";

interface FetchResponse<_type> {
  count: number;
  results: _type[];
}
//this custom hook is use to fetch data from the backend through the API.

const useData = <_type>(endpoint: string) => {
  const [data, setData] = useState<_type[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<_type>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
