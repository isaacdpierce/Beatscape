import { useEffect, useState } from 'react';
import { getRandomIndex } from 'Assets/helpers/helpers';
import axios from 'axios';

const useSceneApi = (initialSpriteUrl, initialEnvironmentUrl) => {
  const [isSceneError, setIsSceneError] = useState(false);
  const [spriteTrack, setSpriteTrack] = useState(undefined);
  const [spriteData, setSpriteData] = useState(undefined);
  const [environmentTrack, setEnvironmentTrack] = useState(undefined);
  const [environmentData, setEnvironmentData] = useState(undefined);
  const [spriteUrl, setSpriteUrl] = useState(initialSpriteUrl);
  const [environmentUrl, setEnvironmentUrl] = useState(initialEnvironmentUrl);

  useEffect(() => {
    const fetchSpriteData = async () => {
      setIsSceneError(false);
      try {
        const result = await axios(spriteUrl);
        const spritesArray = await result.data.map(sprite => sprite.sprite_url);
        setSpriteData(spritesArray);
        const spriteStem = await spritesArray[getRandomIndex(spritesArray)];
        setSpriteTrack(spriteStem);
      } catch (error) {
        setIsSceneError(true);
      }
    };

    fetchSpriteData();
    // eslint-disable-next-line
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
        const environmentStem = await environmentsArray[
          getRandomIndex(environmentsArray)
        ];
        setEnvironmentTrack(environmentStem);
      } catch (error) {
        setIsSceneError(true);
      }
    };
    fetchEnvironmentData();
    // eslint-disable-next-line
  }, [environmentUrl]);

  return [
    {
      isSceneError,
      spriteData,
      spriteTrack,
      environmentTrack,
      environmentData,
    },
    setSpriteUrl,
    setEnvironmentUrl,
    setSpriteTrack,
    setEnvironmentTrack,
  ];
};

export default useSceneApi;
