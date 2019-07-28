import { useEffect, useState } from 'react';
import axios from 'axios';

const useSceneApi = (initialSpriteUrl, initialEnvironmentUrl) => {
  const [spriteData, setSpriteData] = useState(undefined);
  const [environmentData, setEnvironmentData] = useState(undefined);
  const [spriteUrl, setSpriteUrl] = useState(initialSpriteUrl);
  const [environmentUrl, setEnvironmentUrl] = useState(initialEnvironmentUrl);
  const [isSceneError, setIsSceneError] = useState(false);

  useEffect(() => {
    const fetchSpriteData = async () => {
      setIsSceneError(false);
      try {
        const result = await axios(spriteUrl);

        setSpriteData(result.data);
        console.log(result.data);
      } catch (error) {
        setIsSceneError(true);
      }
    };

    fetchSpriteData();
  }, [spriteUrl]);

  useEffect(() => {
    const fetchEnvironmentData = async () => {
      setIsSceneError(false);
      try {
        const result = await axios(environmentUrl);

        setEnvironmentData(result.data);
        console.log(result.data);
      } catch (error) {
        setIsSceneError(true);
      }
    };

    fetchEnvironmentData();
  }, [environmentUrl]);

  return [
    {
      isSceneError,
      spriteData,
      environmentData,
    },
    setSpriteUrl,
    setEnvironmentUrl,
  ];
};

export default useSceneApi;
