import { useEffect, useState } from 'react';
import axios from 'axios';

export const useEnvironmentsApi = initialUrl => {
  const [data, setData] = useState(undefined);
  const [url, setUrl] = useState(initialUrl);
  const [environmentUrl, setEnvironmentUrl] = useState(initialUrl);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

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

  useEffect(() => {
    const fetchEnvironments = async () => {
      try {
        const result = await axios();
        setData(result.data);
      } catch (error) {
        setIsError(true);
        setErrorMsg('An error occurred loading environment track');
      }
    };
    fetchEnvironments();
  }, [environmentUrl, initialUrl, url]);

  useEffect(() => {
    const fetchSprites = async () => {
      try {
        const result = await axios();
        setData(result.data);
      } catch (error) {
        setIsError(true);
        setErrorMsg('An error occurred loading sprite track');
      }
    };
    fetchSprites();
  }, [environmentUrl, initialUrl, url]);

  return [
    {
      data,
      isLoading,
      isError,
      setIsError,
      isPlaying,
      errorMsg,
      environmentUrl,
      spriteUrl,
    },
    setUrl,
    setIsPlaying,
    setErrorMsg,
    setEnvironmentUrl,
    setSpriteUrl,
  ];
};
