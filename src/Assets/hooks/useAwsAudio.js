import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import useAudioContext from 'Context/useAudioContext';

const useAwsAudio = () => {
  const { audioContext } = useContext(useAudioContext);
  const [awsAudio, setAwsAudio] = useState(undefined);
  const [awsIsLoading, setAwsIsLoading] = useState(undefined);
  const [isAwsError, setIsAwsError] = useState(undefined);
  const [awsErrorMsg, setAwsErrorMsg] = useState(undefined);
  const [awsUrl, setAwsUrl] = useState(undefined);

  useEffect(() => {
    if (awsUrl) {
      const fetchSoundData = async () => {
        setAwsIsLoading(true);
        setIsAwsError(false);
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
          setIsAwsError(true);
          setAwsErrorMsg('There was a problem loading audio data.');
        }
        setAwsIsLoading(false);
      };

      fetchSoundData();
    }
    // eslint-disable-next-line 
  }, [awsUrl]);

  return [{ awsAudio, awsIsLoading, isAwsError, awsErrorMsg }, setAwsUrl];
};

export default useAwsAudio;
