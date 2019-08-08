import React, { useContext, useEffect, useState } from 'react';
import { SwingLoader } from 'Components/Loader/Loader';
import MachineContext from 'Context/MachineContext';
import { StyledInfoDisplayWrapper, StyledInfoDisplay } from './StyledDisplay';

const InfoDisplay = () => {
  const {
    isError,
    errorMsg,
    isLoading,
    isAnimated,
    isPlaying,
    musicData,
    sceneType,
  } = useContext(MachineContext);

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
      if (isPlaying) {
        setMessage(
          <span>
            Now Playing: {name} {sceneType}
          </span>
        );
      } else {
        setMessage(
          <span>
            '{name} {sceneType}' is loaded and ready to play
          </span>
        );
      }
    }
    // eslint-disable-next-line
  }, [ isError, isLoading, isPlaying ]);

  return (
    <StyledInfoDisplayWrapper>
      <StyledInfoDisplay>
        <span style={isError ? { color: 'var(--error)' } : null}>
          {message}
        </span>
      </StyledInfoDisplay>
    </StyledInfoDisplayWrapper>
  );
};

export default InfoDisplay;
