import { useEffect, useState } from 'react';
import axios from 'axios';

const useSceneApi = initialUrl => {
  const [sceneData, setSceneData] = useState(undefined);
  const [sceneUrl, setSceneUrl] = useState(initialUrl);
  const [isSceneError, setIsSceneError] = useState(false);

  useEffect(() => {
    const fetchSceneData = async () => {
      setIsSceneError(false);

      try {
        console.log(sceneUrl);
        const result = await axios(sceneUrl);

        setSceneData(result.data);
      } catch (error) {
        setIsSceneError(true);
      }
    };

    fetchSceneData();
  }, [sceneUrl]);

  return [
    {
      isSceneError,
      setIsSceneError,
      sceneData,
    },
    setSceneUrl,
  ];
};

export default useSceneApi;
