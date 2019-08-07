import { useEffect, useReducer } from 'react';
import machineState from 'Assets/state/machineState';
import reducer from 'Assets/reducers/reducer.js';
import { makeTracks, getRandomIndex } from 'Assets/helpers/helpers';
import axios from 'axios';

export const useBeatscapeApi = () => {
  const [
    {
      isLoading,
      isPlaying,
      isAnimated,
      isError,
      errorMsg,
      musicUrl,
      musicData,
      musicTracks,
      spriteUrl,
      spriteData,
      spriteTrack,
      environmentUrl,
      environmentData,
      environmentTrack,
      sceneType,
    },
    setState,
  ] = useReducer(reducer, machineState);

  useEffect(() => {
    if (musicUrl) {
      const fetchData = async () => {
        setState({ isLoading: true, isPlaying: false, isError: false });

        try {
          const result = await axios(musicUrl);
          setState({ musicData: result.data });
          const { stems } = result.data;
          const trackList = await makeTracks(stems);
          setState({ musicTracks: trackList });
        } catch (error) {
          setState({
            isError: true,
            errorMsg: 'There was a problem loading you music selection.',
          });
        }

        setState({ isLoading: false });
      };

      fetchData();
    }
    // eslint-disable-next-line
         }, [musicUrl]);

  useEffect(() => {
    if (spriteUrl) {
      const fetchSpriteData = async () => {
        setState({ isError: false });
        try {
          const result = await axios(spriteUrl);

          const spritesArray = await result.data.map(
            sprite => sprite.sprite_url
          );
          setState({ spriteData: spritesArray });
          const spriteStem = await spritesArray[getRandomIndex(spritesArray)];
          setState({ spriteTrack: spriteStem });
        } catch (error) {
          setState({
            isError: true,
            errorMsg: 'There was a problem loading you sprites selection.',
          });
        }
      };

      fetchSpriteData();
    }
    // eslint-disable-next-line
         }, [spriteUrl]);

  useEffect(() => {
    if (environmentUrl) {
      const fetchEnvironmentData = async () => {
        setState({ isError: false });
        try {
          const result = await axios(environmentUrl);
          const environmentsArray = await result.data.map(
            environment => environment.environment_url
          );
          setState({ environmentData: environmentsArray });
          const environmentStem = await environmentsArray[
            getRandomIndex(environmentsArray)
          ];
          setState({ environmentTrack: environmentStem });
        } catch (error) {
          setState({
            isError: true,
            errorMsg: 'There was a problem loading you environment selection.',
          });
        }
      };
      fetchEnvironmentData();
    }
    // eslint-disable-next-line
         }, [environmentUrl]);

  return [
    {
      musicData,
      musicTracks,
      isLoading,
      isPlaying,
      isAnimated,
      isError,
      errorMsg,
      spriteData,
      spriteTrack,
      environmentTrack,
      environmentData,
      sceneType,
    },
    setState,
  ];
};

export default useBeatscapeApi;
