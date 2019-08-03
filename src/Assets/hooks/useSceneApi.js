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
        const spritesArray = await result.data.map(sprite => sprite.sprite_url);
        setSpriteData(spritesArray);
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
        const environmentsArray = await result.data.map(
          environment => environment.environment_url
        );
        setEnvironmentData(environmentsArray);
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
