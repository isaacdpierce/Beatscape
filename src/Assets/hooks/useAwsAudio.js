import { useState, useEffect, useContext } from 'react';
import MachineContext from 'Context/MachineContext';
import axios from 'axios';
import useAudioContext from 'Context/useAudioContext';

const useAwsAudio = () => {
  const { setIsError, setErrorMsg, setIsLoading } = useContext(MachineContext);
  const { audioContext } = useContext(useAudioContext);
  const [awsAudio, setAwsAudio] = useState(undefined);
  const [awsUrl, setAwsUrl] = useState(undefined);

  useEffect(() => {
    if (audioContext && awsUrl) {
      const fetchSoundData = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
          const response = await axios({
            responseType: 'arraybuffer',
            url: awsUrl,
            method: 'get',
            headers: {
              'Content-Type': 'audio/mp3',
            },
          });
          const decodedSound = await audioContext.decodeAudioData(
            response.data
          );

          setAwsAudio(decodedSound);
        } catch (error) {
          setIsError(true);
          setErrorMsg('There was a problem loading music files.');
        }
        setIsLoading(false);
      };

      fetchSoundData();
    }
  }, [audioContext, awsUrl, setErrorMsg, setIsError, setIsLoading]);

  return [{ awsAudio }, setAwsUrl];
};

export default useAwsAudio;
