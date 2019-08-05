import axios from 'axios'
import useAudioContext from 'Context/useAudioContext';

const fetchAWSData = async (awsUrl) => {
  
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

export default fetchAWSData