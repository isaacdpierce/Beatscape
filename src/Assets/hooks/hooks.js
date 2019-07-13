// TODO Complete and import to App.js
import { useEffect, useState } from 'react';
import axios from 'axios';

export const useBeatscapeApi = initialUrl => {
  const [data, setData] = useState(undefined);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      console.log(url);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [
    { data, isLoading, isError, isPlaying, isAnimated },
    setUrl,
    setIsPlaying,
    setIsAnimated,
  ];
};
