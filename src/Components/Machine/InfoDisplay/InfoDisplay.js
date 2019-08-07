import React, { useContext, useEffect, useState } from 'react';
import { SwingLoader } from 'Components/Loader/Loader';
import MachineContext from 'Context/MachineContext';
import { StyledDisplayInfoWrapper, StyledInfoDisplay } from './StyledDisplay';

const InfoDisplay = () => {
  const state = useContext(MachineContext);
  const {
    isError,
    errorMsg,
    isLoading,
    isAnimated,
    isPlaying,
    musicData,
    sceneType,
  } = state;
  const [message, setMessage] = useState(undefined);
  const [name, setName] = useState('');

  useEffect(() => {
    if (!musicData || isError) {
      setMessage(errorMsg);
    } else {
      setName(musicData.soundscape_name);
    }
  }, [errorMsg, isError, musicData]);

  useEffect(() => {
    if (isLoading) {
      setMessage(
        <>
          <SwingLoader />
          <span>Loading</span>
        </>
      );
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isError && !isLoading) {
      if (!isPlaying) {
        setMessage(
          <span>
            '{name} {sceneType}' is loaded and ready to play
          </span>
        );
      } else if (isAnimated) {
        setMessage(<span>Click stop animate to change levels</span>);
      } else {
        setMessage(
          <span>
            Now Playing: {name} {sceneType}
          </span>
        );
      }
    }
    // eslint-disable-next-line
  }, [isAnimated, isError, isLoading, isPlaying]);

  return (
    <StyledDisplayInfoWrapper>
      <StyledInfoDisplay>
        <span style={isError ? { color: 'var(--error)' } : null}>
          {message}
        </span>
      </StyledInfoDisplay>
    </StyledDisplayInfoWrapper>
  );
};

export default InfoDisplay;
