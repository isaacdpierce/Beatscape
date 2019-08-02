import { useEffect, useState } from 'react';
import axios from 'axios';

export const useBeatscapeApi = initialUrl => {
  const [data, setData] = useState(undefined);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isMusicError, setIsMusicError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsPlaying(false);
      setIsMusicError(false);

      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsMusicError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isMusicError, isPlaying }, setUrl, setIsPlaying];
};

export default useBeatscapeApi;
