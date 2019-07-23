import React, { useContext, useEffect, useState } from 'react';
import { SwingLoader } from 'Components/Loader/Loader';
import MachineContext from 'Context/MachineContext';
import { StyledDisplayInfoWrapper, StyledInfoDisplay } from './StyledDisplay';

const InfoDisplay = () => {
  const { isError, isLoading, isAnimated, isPlaying, data } = useContext(
    MachineContext
  );
  const [message, setMessage] = useState(undefined);
  const [name, setName] = useState('');

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    if (!data || isError) {
      setMessage(`Something went wrong... try another selection`);
    } else {
      setName(data.soundscape_name);
    }
  }, [data, isError]);

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
        setMessage(<span>{name} is loaded and ready to play</span>);
      } else if (isAnimated) {
        setMessage(<span>Click stop animate to change levels</span>);
      } else {
        setMessage(<span>Now Playing: {name}</span>);
      }
    }
  }, [isAnimated, isError, isLoading, isPlaying, name]);

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
