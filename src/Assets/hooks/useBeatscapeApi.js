import { useEffect, useState } from 'react';
import { makeTracks, getRandomIndex } from 'Assets/helpers/helpers';
import axios from 'axios';

export const useBeatscapeApi = (
  initialMusicUrl,
  initialSpriteUrl,
  initialEnvironmentUrl
) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [isError, setIsError] = useState(false);
  const [musicData, setMusicData] = useState(undefined);
  const [musicTracks, setMusicTracks] = useState(undefined);
  const [musicUrl, setMusicUrl] = useState(initialMusicUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [spriteTrack, setSpriteTrack] = useState(undefined);
  const [spriteData, setSpriteData] = useState(undefined);
  const [environmentTrack, setEnvironmentTrack] = useState(undefined);
  const [environmentData, setEnvironmentData] = useState(undefined);
  const [spriteUrl, setSpriteUrl] = useState(initialSpriteUrl);
  const [environmentUrl, setEnvironmentUrl] = useState(initialEnvironmentUrl);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsPlaying(false);
      setIsError(false);

      try {
        const result = await axios(musicUrl);
        setMusicData(result.data);
        const { stems } = result.data;
        const trackList = await makeTracks(stems);
        setMusicTracks(trackList);
      } catch (error) {
        setIsError(true);
        setErrorMsg('There was a problem loading you music selection.');
      }

      setIsLoading(false);
    };

    fetchData();
  }, [musicUrl]);

  useEffect(() => {
    const fetchSpriteData = async () => {
      setIsError(false);
      try {
        const result = await axios(spriteUrl);
        const spritesArray = await result.data.map(sprite => sprite.sprite_url);
        setSpriteData(spritesArray);
        const spriteStem = await spritesArray[getRandomIndex(spritesArray)];
        setSpriteTrack(spriteStem);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchSpriteData();
    // eslint-disable-next-line
  }, [spriteUrl]);

  useEffect(() => {
    const fetchEnvironmentData = async () => {
      setIsError(false);
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
        setIsError(true);
      }
    };
    fetchEnvironmentData();
    // eslint-disable-next-line
  }, [environmentUrl]);

  return [
    {
      musicData,
      musicTracks,
      isLoading,
      isError,
      errorMsg,
      isPlaying,
      spriteData,
      spriteTrack,
      environmentTrack,
      environmentData,
    },
    setIsLoading,
    setIsError,
    setErrorMsg,
    setMusicUrl,
    setIsPlaying,
    setSpriteUrl,
    setEnvironmentUrl,
    setSpriteTrack,
    setEnvironmentTrack,
  ];
};

export default useBeatscapeApi;
