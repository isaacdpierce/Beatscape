import { useEffect, useState } from 'react';
import axios from 'axios';

const useSceneApi = (initialSpriteUrl, initialEnvironmentUrl) => {
  const [spriteData, setSpriteData] = useState([]);
  const [environmentData, setEnvironmentData] = useState([]);
  const [spriteUrl, setSpriteUrl] = useState(initialSpriteUrl);
  const [environmentUrl, setEnvironmentUrl] = useState(initialEnvironmentUrl);
  const [isSceneError, setIsSceneError] = useState(false);

  useEffect(() => {
    const fetchSpriteData = async () => {
      setIsSceneError(false);
      try {
        const result = await axios(spriteUrl);
        setSpriteData(result.data);
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
